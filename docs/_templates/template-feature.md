# Feature: [Nome da Feature]

## Identificação

- **Código**: FT-XXX
- **Módulo**: [Nome do Módulo]
- **Versão**: 1.0
- **Data**: YYYY-MM-DD
- **Tipo**: [Command | Query]

## Descrição Funcional

[Descrição clara e concisa do que esta feature faz - uma única responsabilidade]

## Responsabilidade

[Qual é a única responsabilidade desta feature? O que ela deve fazer e APENAS isso?]

## Contexto de Uso

[Quando e por quem esta feature é utilizada?]

## Request (Entrada)

### Dados de Entrada

| Campo | Tipo | Obrigatório | Descrição | Validações |
|-------|------|-------------|-----------|------------|
| [campo1] | [string] | Sim | [Descrição] | [min: 3, max: 100] |
| [campo2] | [number] | Não | [Descrição] | [> 0] |
| [campo3] | [date] | Sim | [Descrição] | [não pode ser passado] |

### Contexto Adicional

- **TenantId**: [Como o tenant é identificado]
- **UserId**: [Usuário que executa a ação]
- **Permissões Necessárias**: [Lista de permissões]

## Validações

### Validações de Entrada

1. **[Campo/Regra]**: [Descrição da validação]
   - **Mensagem de Erro**: "[Mensagem exibida ao usuário]"
   - **Código de Erro**: `ERR_XXX_001`

2. **[Campo/Regra]**: [Descrição da validação]
   - **Mensagem de Erro**: "[Mensagem]"
   - **Código de Erro**: `ERR_XXX_002`

### Validações de Negócio

1. **[Regra de Negócio]**: [Descrição]
   - **Mensagem de Erro**: "[Mensagem]"
   - **Código de Erro**: `ERR_XXX_003`

2. **[Regra de Negócio]**: [Descrição]
   - **Mensagem de Erro**: "[Mensagem]"
   - **Código de Erro**: `ERR_XXX_004`

## Processamento

### Fluxo de Execução

1. [Passo 1 do processamento]
2. [Passo 2 do processamento]
3. [Passo 3 do processamento]
4. [Passo final e resultado]

### Regras de Negócio Aplicadas

- **RN-XXX**: [Nome da Regra] - [Como é aplicada nesta feature]
- **RN-YYY**: [Nome da Regra] - [Como é aplicada nesta feature]

### Cálculos e Transformações

[Descreva quaisquer cálculos ou transformações de dados realizados]

## Response (Saída)

### Sucesso

**Status**: 200 OK (Query) ou 201 Created (Command)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| [campo1] | [string] | [Descrição] |
| [campo2] | [object] | [Descrição] |

### Erros Possíveis

| Código HTTP | Código Erro | Descrição | Cenário |
|-------------|-------------|-----------|---------|
| 400 | ERR_XXX_001 | [Mensagem] | [Quando ocorre] |
| 404 | ERR_XXX_002 | [Mensagem] | [Quando ocorre] |
| 409 | ERR_XXX_003 | [Mensagem] | [Quando ocorre] |
| 422 | ERR_XXX_004 | [Mensagem] | [Quando ocorre] |

## Dados Afetados

### Entidades Lidas

- **[Entidade 1]**: [Quais dados são consultados]
- **[Entidade 2]**: [Quais dados são consultados]

### Entidades Modificadas (apenas para Commands)

- **[Entidade 1]**: [Tipo de modificação - Criar/Atualizar/Deletar]
- **[Entidade 2]**: [Tipo de modificação]

### Escopo Tenant

- [ ] Esta feature opera sobre dados com tenant (isolado por organização)
- [ ] Esta feature opera sobre dados globais (sem tenant)
- [ ] Esta feature opera sobre ambos

## Eventos Gerados (se aplicável)

### Eventos de Domínio

- **[EventoNomeado]**: [Quando é disparado e qual seu propósito]
- **[OutroEvento]**: [Quando é disparado]

### Integrações Assíncronas

- [Descrição de processamento assíncrono necessário]

## Integrações

### Módulos/Features Dependentes

- **[Módulo.Feature]**: [Como esta feature depende/usa outra]

### APIs Externas

- **[API Externa]**: [Quando e como é chamada]
- **[Serviço]**: [Propósito da integração]

## Auditoria e Logs

### Dados Auditados

- [ ] Ação é registrada em auditoria
- [ ] Dados antes da modificação são salvos
- [ ] Usuário e timestamp são registrados

### Logs Gerados

- **Info**: [Quais informações são logadas]
- **Warning**: [Quais situações geram warning]
- **Error**: [Quais erros são logados]

## Performance

### Expectativas

- **Tempo de Resposta**: [Tempo esperado]
- **Volume de Dados**: [Volume típico processado]

### Considerações

[Qualquer consideração especial de performance]

## Segurança

### Autenticação

- [ ] Requer usuário autenticado
- [ ] Permite acesso anônimo

### Autorização

- **Permissões Necessárias**:
  - [Permissão 1]
  - [Permissão 2]

### Isolamento Tenant

[Como é garantido que o usuário só acessa dados de seu tenant]

## Testes

### Cenários de Teste Principais

1. **Cenário**: [Cenário de sucesso principal]
   - **Given**: [Pré-condições]
   - **When**: [Ação executada]
   - **Then**: [Resultado esperado]

2. **Cenário**: [Cenário de validação]
   - **Given**: [Pré-condições]
   - **When**: [Ação executada]
   - **Then**: [Erro esperado]

3. **Cenário**: [Cenário de borda]
   - **Given**: [Pré-condições]
   - **When**: [Ação executada]
   - **Then**: [Resultado esperado]

## Notas de Implementação

[Qualquer observação importante para quem for implementar]

## Histórico

| Versão | Data | Autor | Descrição |
|--------|------|-------|-----------|
| 1.0 | YYYY-MM-DD | [Nome] | Criação inicial |
