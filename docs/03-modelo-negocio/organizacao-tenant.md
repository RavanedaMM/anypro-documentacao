# Organização (Tenant)

## Definição

A **Organização** é a entidade central do modelo multi-tenant do ANYPRO. Representa o tenant no sistema e é o consolidador contábil e comercial de todas as empresas (CNPJ) associadas a ela. Cada organização:

- É completamente isolada das demais
- Possui um plano de assinatura específico
- Gerencia uma ou mais empresas com CNPJ
- Tem seus próprios usuários, parâmetros e dados

## Propósito

A organização serve como:

1. **Unidade de Isolamento**: Garante segurança e privacidade dos dados
2. **Unidade Comercial**: Define o cliente no modelo SaaS e seu plano de assinatura
3. **Consolidador Contábil**: Agrupa empresas para visão consolidada
4. **Contexto de Usuários**: Define o escopo de acesso e permissões

## Características

### Isolamento de Dados

Todos os dados no sistema que são específicos de uma organização possuem o campo `OrganizacaoId` (tenant_id), garantindo:

- Nenhuma organização vê dados de outras
- Consultas sempre filtradas por organização
- Segurança em nível de banco de dados (Row-Level Security)
- Auditoria independente por organização

### Hierarquia

```
Organização (Tenant)
  ├─── Plano de Assinatura
  ├─── Usuários
  ├─── Empresa 1 (CNPJ)
  │     ├─── Parâmetros Fiscais
  │     ├─── Parâmetros Contábeis
  │     └─── Movimentações
  ├─── Empresa 2 (CNPJ)
  │     ├─── Parâmetros Fiscais
  │     ├─── Parâmetros Contábeis
  │     └─── Movimentações
  └─── Parâmetros da Organização
```

### Ciclo de Vida

#### 1. Criação (Onboarding)

**Quando**: Nova organização se cadastra no sistema

**Processo**:
- Cadastro dos dados da organização
- Seleção do plano de assinatura
- Criação do usuário administrador inicial
- Configuração de dados iniciais
- Criação da primeira empresa (CNPJ)
- Inicialização de parâmetros padrão

**Dados Necessários**:
- Razão Social
- Nome Fantasia
- Documento (CNPJ matriz ou CPF do responsável)
- Endereço completo
- Dados de contato
- Dados de faturamento
- Plano escolhido

#### 2. Ativo

**Características**:
- Plano de assinatura ativo e pagamento em dia
- Usuários podem acessar o sistema
- Todas as funcionalidades disponíveis conforme plano
- Movimentações e operações permitidas

**Restrições conforme Plano**:
- Número máximo de usuários
- Módulos disponíveis
- Empresas (CNPJ) permitidas
- Volume de transações
- Espaço de armazenamento
- Nível de suporte

#### 3. Suspenso

**Quando**: Inadimplência ou solicitação temporária

**Restrições**:
- Acesso bloqueado para usuários operacionais
- Apenas administrador acessa (modo somente leitura)
- Não permite novas movimentações
- Mantém dados íntegros
- Notificações sobre situação

**Reversão**:
- Regularização de pagamento
- Reativação automática ou manual

#### 4. Inativo/Cancelado

**Quando**: Cancelamento da assinatura

**Processo**:
- Período de retenção de dados (90 dias)
- Export de dados disponível
- Bloqueio total de acesso após período
- Exclusão lógica dos dados
- Possibilidade de reativação dentro do período

#### 5. Arquivado

**Quando**: Após período de retenção

**Características**:
- Dados mantidos apenas para fins legais/auditoria
- Não reativável
- Acesso apenas administrativo
- Exclusão física após período legal (5-7 anos)

## Atributos da Organização

### Dados Cadastrais

| Atributo | Tipo | Obrigatório | Descrição |
|----------|------|-------------|-----------|
| Id | GUID | Sim | Identificador único da organização |
| RazaoSocial | String(200) | Sim | Razão social completa |
| NomeFantasia | String(200) | Não | Nome fantasia / nome comercial |
| Documento | String(20) | Sim | CNPJ da matriz ou CPF do responsável |
| TipoDocumento | Enum | Sim | CNPJ ou CPF |
| InscricaoEstadual | String(20) | Não | IE quando aplicável |
| InscricaoMunicipal | String(20) | Não | IM quando aplicável |

### Endereço

| Atributo | Tipo | Obrigatório | Descrição |
|----------|------|-------------|-----------|
| CEP | String(10) | Sim | Código postal |
| Logradouro | String(200) | Sim | Rua, avenida, etc |
| Numero | String(20) | Sim | Número do endereço |
| Complemento | String(100) | Não | Complemento |
| Bairro | String(100) | Sim | Bairro |
| CidadeId | GUID | Sim | Referência à cidade |
| EstadoId | GUID | Sim | Referência ao estado |
| PaisId | GUID | Sim | Referência ao país |

### Contato

| Atributo | Tipo | Obrigatório | Descrição |
|----------|------|-------------|-----------|
| EmailPrincipal | String(100) | Sim | Email principal de contato |
| EmailFaturamento | String(100) | Não | Email para faturas |
| EmailSuporte | String(100) | Não | Email para suporte técnico |
| TelefonePrincipal | String(20) | Sim | Telefone principal |
| TelefoneAlternativo | String(20) | Não | Telefone alternativo |
| Website | String(200) | Não | Website da organização |

### Dados Comerciais (SaaS)

| Atributo | Tipo | Obrigatório | Descrição |
|----------|------|-------------|-----------|
| PlanoId | GUID | Sim | Plano de assinatura atual |
| DataContratacao | DateTime | Sim | Data de início do contrato |
| DataVencimento | DateTime | Sim | Vencimento da próxima fatura |
| Status | Enum | Sim | Ativo, Suspenso, Cancelado, Arquivado |
| FormaPagamento | Enum | Sim | Cartão, Boleto, PIX |
| DiaVencimento | Integer | Sim | Dia do mês para vencimento (1-31) |

### Limites e Quotas

| Atributo | Tipo | Descrição |
|----------|------|-----------|
| LimiteUsuarios | Integer | Máximo de usuários ativos permitidos |
| LimiteEmpresas | Integer | Máximo de empresas (CNPJ) permitidas |
| LimiteArmazenamento | Long | Espaço em GB para armazenamento |
| LimiteTransacoes | Integer | Transações mensais permitidas |

### Controle

| Atributo | Tipo | Descrição |
|----------|------|-----------|
| CriadoEm | DateTime | Data/hora de criação |
| CriadoPor | GUID | Usuário que criou (sistema no onboarding) |
| AtualizadoEm | DateTime | Última atualização |
| AtualizadoPor | GUID | Último usuário que atualizou |
| Ativo | Boolean | Registro ativo/inativo |

## Regras de Negócio

### RN-ORG-001: Documento Único

Cada documento (CNPJ ou CPF) só pode estar associado a uma organização ativa no sistema.

**Validação**:
- Ao criar nova organização, verificar se documento já existe
- Se existir e estiver ativa: rejeitar
- Se existir e estiver cancelada há mais de 90 dias: permitir reuso
- Se existir e estiver cancelada há menos de 90 dias: oferecer reativação

### RN-ORG-002: Limites do Plano

A organização não pode exceder os limites definidos no plano contratado.

**Aplicação**:
- Ao adicionar usuário: verificar limite de usuários
- Ao adicionar empresa: verificar limite de empresas
- Mensalmente: verificar transações realizadas
- Upload de arquivos: verificar espaço disponível

**Ação quando excedido**:
- Bloquear ação que excederia o limite
- Notificar administrador
- Sugerir upgrade de plano

### RN-ORG-003: Primeira Empresa Obrigatória

Toda organização deve ter pelo menos uma empresa (CNPJ) cadastrada para operar o sistema.

**Aplicação**:
- Durante onboarding: exigir cadastro da primeira empresa
- Não permitir exclusão da última empresa da organização
- Se necessário excluir última empresa: exigir cadastro de outra antes

### RN-ORG-004: Administrador Obrigatório

Toda organização deve ter pelo menos um usuário com perfil de administrador.

**Aplicação**:
- Durante onboarding: criar usuário admin automático
- Não permitir remoção de privilégios admin do último admin
- Não permitir desativar último usuário admin

### RN-ORG-005: Período de Retenção

Dados de organizações canceladas devem ser retidos por 90 dias antes de serem arquivados.

**Aplicação**:
- Ao cancelar: marcar data de cancelamento
- Permitir reativação automática por 90 dias
- Após 90 dias: mover para status arquivado
- Arquivados: manter por período legal (5-7 anos conforme legislação)

### RN-ORG-006: Mudança de Plano

Mudança de plano pode ser feita a qualquer momento, com efeitos imediatos ou no próximo ciclo de faturamento.

**Upgrade (plano superior)**:
- Efeito imediato
- Cobrança proporcional no ciclo atual
- Novos limites aplicados imediatamente

**Downgrade (plano inferior)**:
- Agendado para próximo ciclo de faturamento
- Verificar se organização está dentro dos novos limites
- Se exceder: notificar e exigir ajustes antes do downgrade

## Segurança e Isolamento

### Isolamento de Dados

**Implementação**:
- Campo `OrganizacaoId` em todas as tabelas com tenant
- Filtro automático em todas as consultas
- Row-Level Security (RLS) no banco de dados
- Validação em nível de aplicação

**Garantias**:
- Usuário de uma organização nunca vê dados de outra
- Impossível cruzar dados entre organizações
- Auditoria registra tentativas de acesso não autorizado

### Autenticação e Contexto

**Fluxo**:
1. Usuário faz login com credenciais
2. Sistema identifica organização do usuário
3. Token JWT inclui OrganizacaoId
4. Todas as requisições incluem contexto da organização
5. Backend valida e filtra dados pela organização

## Integrações

### Sistemas que Consomem

- **Módulo de Faturamento**: Dados da organização para geração de faturas
- **Módulo de Suporte**: Identificação do tenant em tickets
- **Relatórios**: Cabeçalhos e identificação
- **Auditoria**: Contexto de todas as operações

### Dados Fornecidos para Empresas

- Parâmetros padrão da organização
- Configurações globais
- Plano e limites
- Usuários disponíveis

## Métricas e Monitoramento

### Métricas Coletadas

- Número total de organizações ativas
- Taxa de crescimento mensal
- Taxa de churn (cancelamento)
- Distribuição por plano
- Uso médio de recursos (usuários, empresas, transações)
- Tempo médio de onboarding

### Alertas

- Organização próxima de exceder limites
- Pagamento em atraso
- Tentativa de acesso anônalo
- Alto volume de erros

## Relacionamentos

### Possui (1:N)

- **Empresas**: Uma organização possui uma ou mais empresas (CNPJ)
- **Usuários**: Uma organização possui vários usuários
- **Parâmetros**: Configurações específicas da organização

### Pertence a (N:1)

- **Plano de Assinatura**: Uma organização pertence a um plano
- **País**: Organização localizada em um país (inicialmente Brasil)

## Histórico

| Versão | Data | Autor | Descrição |
|--------|------|-------|-----------|
| 1.0 | 2025-12-02 | Equipe ANYPRO | Criação inicial |
