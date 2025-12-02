# Entidade: [Nome da Entidade]

## Identificação

- **Nome**: [NomeEntidade]
- **Tabela**: [nome_tabela]
- **Módulo**: [Módulo responsável]
- **Tipo**: [Master Data | Transacional | Configuração | Sistema]
- **Escopo**: [Global | Tenant]
- **Versão**: 1.0

## Descrição

[Descrição clara do propósito e responsabilidade desta entidade no domínio]

## Justificativa

[Por que esta entidade existe? Qual problema do domínio ela resolve?]

## Escopo Multi-Tenant

- [ ] **Dados Globais** (sem tenant) - Compartilhados por todas as organizações
- [ ] **Dados com Tenant** (isolados por organização)

**Justificativa do Escopo**: [Por que esta entidade tem este escopo?]

## Atributos

### Chave Primária

| Atributo | Tipo | Descrição |
|----------|------|-----------|
| [Id] | [GUID/Long] | [Identificador único] |

### Atributos de Negócio

| Atributo | Tipo | Obrigatório | Descrição | Regras |
|----------|------|-------------|-----------|--------|
| [atributo1] | [string(100)] | Sim | [Descrição funcional] | [Único, não vazio] |
| [atributo2] | [decimal(18,2)] | Sim | [Descrição] | [> 0] |
| [atributo3] | [date] | Não | [Descrição] | [não futuro] |
| [atributo4] | [boolean] | Sim | [Descrição] | [default: true] |

### Atributos de Controle

| Atributo | Tipo | Descrição |
|----------|------|-----------|
| TenantId | GUID | Identificador da organização (se aplicável) |
| CriadoPor | GUID | Usuário que criou o registro |
| CriadoEm | DateTime | Data/hora de criação |
| AtualizadoPor | GUID | Último usuário que atualizou |
| AtualizadoEm | DateTime | Data/hora da última atualização |
| Ativo | Boolean | Registro ativo ou inativo (exclusão lógica) |
| Versao | Integer | Controle de concorrência otimista |

## Relacionamentos

### Relações de Pertencimento

| Entidade Relacionada | Tipo | Cardinalidade | Descrição |
|---------------------|------|---------------|-----------|
| [EntidadePai] | Pertence a | N:1 | [Descrição da relação] |

### Relações de Posse

| Entidade Relacionada | Tipo | Cardinalidade | Descrição |
|---------------------|------|---------------|-----------|
| [EntidadeFilha] | Possui | 1:N | [Descrição da relação] |

### Relações Muitos-para-Muitos

| Entidade Relacionada | Através de | Descrição |
|---------------------|------------|-----------|
| [Entidade] | [TabelaAssociativa] | [Descrição da relação] |

## Regras de Negócio

### RN-XXX - [Nome da Regra]
[Descrição detalhada da regra de negócio aplicada a esta entidade]

### RN-YYY - [Nome da Regra]
[Descrição detalhada da regra de negócio]

## Regras de Integridade

### Obrigatoriedade

- [Campo X] é obrigatório quando [condição]
- [Campo Y] só pode ser preenchido se [condição]

### Unicidade

- Combinação de [campo1 + campo2] deve ser única dentro do tenant
- [campo3] deve ser único globalmente

### Valores Permitidos

- [Campo X]: [lista de valores válidos ou range]
- [Campo Y]: [regras de formato ou pattern]

### Consistência

- [Regra de consistência entre campos]
- [Validação cross-field]

## Restrições de Domínio

[Descreva restrições conceituais importantes sobre esta entidade]

## Ciclo de Vida

### Estados Possíveis

1. **[Estado 1]**: [Descrição]
2. **[Estado 2]**: [Descrição]
3. **[Estado 3]**: [Descrição]

### Transições de Estado

```
[Estado Inicial] --[ação]--> [Estado Intermediário] --[ação]--> [Estado Final]
```

[Descrição detalhada das transições permitidas]

## Eventos de Domínio

### Eventos Gerados

- **[EventoCriado]**: Disparado quando [condição]
- **[EventoAtualizado]**: Disparado quando [condição]
- **[EventoStatusAlterado]**: Disparado quando [condição]

## Índices e Performance

### Índices Necessários

| Nome do Índice | Campos | Tipo | Propósito |
|---------------|--------|------|-----------|
| [idx_nome] | [campo1, campo2] | Único | [Propósito funcional] |
| [idx_busca] | [campo3] | Não-único | [Otimizar consulta X] |

### Consultas Frequentes

1. **[Nome da Consulta]**: [Descrição e campos utilizados]
2. **[Nome da Consulta]**: [Descrição e campos utilizados]

## Dados Sensíveis e Privacidade

- [ ] Esta entidade contém dados pessoais (LGPD)
- [ ] Requer criptografia em repouso
- [ ] Requer criptografia em trânsito
- [ ] Sujeita a retenção de dados limitada

**Campos Sensíveis**:
- [Campo X]: [Tipo de dado sensível e tratamento necessário]

## Auditoria

- [ ] Todas as alterações devem ser auditadas
- [ ] Manter histórico de versões anteriores
- [ ] Registrar quem/quando visualizou (auditoria de leitura)

## Volume e Crescimento

### Estimativas

- **Volume Inicial**: [Estimativa]
- **Crescimento Esperado**: [Por período]
- **Retenção**: [Política de retenção de dados]

### Particionamento

[Se aplicável, estratégia de particionamento]

## Agregados (DDD)

### Este é um Agregado Root?

- [ ] Sim - Esta entidade é a raiz de um agregado
- [ ] Não - Esta entidade pertence ao agregado [NomeAgregado]

### Entidades do Agregado

[Se for root, liste as entidades que fazem parte deste agregado]

1. [Entidade 1]
2. [Entidade 2]

### Invariantes do Agregado

[Regras que devem sempre ser verdadeiras dentro deste agregado]

## Migração e Versionamento

### Estratégia de Migração

[Como dados desta entidade devem ser migrados entre versões]

### Compatibilidade

[Considerações de compatibilidade com versões anteriores]

## Exemplos de Uso (Funcional)

### Exemplo 1: [Cenário]

**Contexto**: [Situação de negócio]

**Dados**:
- [Campo 1]: [Valor exemplo]
- [Campo 2]: [Valor exemplo]

**Resultado**: [O que acontece com estes dados]

### Exemplo 2: [Cenário de Exceção]

**Contexto**: [Situação de negócio]

**Dados**: [Dados inválidos ou situação especial]

**Resultado**: [Como o sistema deve se comportar]

## Integrações

### Sistemas que Consomem

- **[Sistema/Módulo]**: [Como e quando acessa esta entidade]

### Sistemas que Alimentam

- **[Sistema/Módulo]**: [Como e quando cria/atualiza dados]

## Notas Adicionais

[Qualquer informação adicional relevante]

## Glossário

[Termos de domínio específicos relacionados a esta entidade]

## Referências

- [Documento de Requisito relacionado]
- [ADR relacionado]
- [Caso de Uso relacionado]

## Histórico

| Versão | Data | Autor | Descrição |
|--------|------|-------|-----------|
| 1.0 | YYYY-MM-DD | [Nome] | Criação inicial |
