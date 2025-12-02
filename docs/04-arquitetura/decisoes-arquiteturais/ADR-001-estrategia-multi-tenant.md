# ADR-001 - Estratégia Multi-Tenant: Shared Database + Shared Schema

## Status

**Aceita**

## Contexto

O ANYPRO é um sistema ERP SaaS que precisa servir múltiplas organizações (tenants) de forma eficiente, segura e econômica. Precisamos decidir qual estratégia de multi-tenancy adotar para garantir:

- Isolamento completo de dados entre organizações
- Escalabilidade para suportar crescimento de clientes
- Custos operacionais sustentáveis
- Facilidade de manutenção e evolução do sistema
- Performance adequada para todos os tenants

### Forças Motivadoras

- **Custo**: Modelo SaaS exige otimização de custos de infraestrutura
- **Manutenção**: Atualizações devem ser aplicadas a todos os tenants simultaneamente
- **Segurança**: Isolamento absoluto de dados é crítico (LGPD, compliance)
- **Performance**: Não pode haver degradação significativa com crescimento de tenants
- **Escalabilidade**: Deve suportar desde dezenas até milhares de organizações

## Decisão

Adotaremos a estratégia **Shared Database + Shared Schema** (banco de dados compartilhado com esquema compartilhado), onde:

- Todos os tenants compartilham a mesma instância de banco de dados
- Todas as tabelas são compartilhadas no mesmo schema
- Isolamento é feito através de campo `OrganizacaoId` (tenant_id) em todas as tabelas que possuem dados de tenant
- Row-Level Security (RLS) do PostgreSQL será utilizado para garantir isolamento em nível de banco

## Alternativas Consideradas

### Alternativa 1: Database per Tenant (Banco por Tenant)

**Descrição**: Cada organização teria seu próprio banco de dados isolado.

**Prós**:
- Isolamento físico completo de dados
- Facilita backup/restore individual
- Possibilita customizações de schema por tenant
- Facilita migração de tenant entre servidores

**Contras**:
- Custo operacional muito alto (múltiplas instâncias de BD)
- Complexidade de gerenciamento (centenas de bancos)
- Dificuldade em aplicar migrações de schema
- Desperdício de recursos (overhead por instância)
- Não escala bem economicamente

**Por que não escolhemos**: Inviável economicamente para modelo SaaS B2B de médio porte. Complexidade operacional excessiva.

### Alternativa 2: Shared Database + Separate Schema (Banco Compartilhado + Schema por Tenant)

**Descrição**: Todos compartilham o banco, mas cada tenant tem seu próprio schema (namespace).

**Prós**:
- Isolamento lógico melhor que shared schema
- Possibilita customizações de schema por tenant
- Backup/restore facilitado por schema

**Contras**:
- Ainda há overhead significativo de gerenciamento
- Migrações devem ser aplicadas em N schemas
- Limites de schemas por banco de dados
- Complexidade no código da aplicação (switch de schema)
- Não resolve problema de escala de forma eficiente

**Por que não escolhemos**: Complexidade intermediária sem benefícios proporcionais. Combina desvantagens de ambos os modelos.

### Alternativa 3: Hybrid (Híbrido - Grandes tenants isolados)

**Descrição**: Tenants pequenos/médios em shared schema, grandes tenants com database dedicado.

**Prós**:
- Flexibilidade para atender diferentes perfis
- Grandes clientes têm isolamento e performance dedicada
- Otimização de custos para pequenos clientes

**Contras**:
- Complexidade arquitetural significativa
- Código deve suportar ambos os modelos
- Dificulta padronização e automação
- Decisão de migração entre modelos é complexa

**Por que não escolhemos**: Adiciona complexidade excessiva para um projeto inicial. Pode ser considerado futuramente se surgir demanda real de grandes tenants.

## Justificativa

### Benefícios Esperados

1. **Custo-Benefício Superior**
   - Uma única instância de banco de dados para todos
   - Otimização de recursos (conexões, memória, CPU)
   - Redução drástica de custos de infraestrutura

2. **Manutenção Simplificada**
   - Migrações de schema aplicadas uma única vez
   - Atualizações simultâneas para todos
   - Backup e restore centralizados
   - Monitoramento unificado

3. **Escalabilidade Horizontal**
   - Fácil adicionar novos tenants (apenas um registro)
   - Crescimento linear de dados
   - Possibilidade de sharding futuro se necessário

4. **Performance Otimizada**
   - Compartilhamento de pool de conexões
   - Cache compartilhado (benefício mútuo)
   - Índices otimizados globalmente

5. **Desenvolvimento Simplificado**
   - Código não precisa lidar com múltiplos bancos
   - Testes mais simples (um ambiente)
   - Queries diretas (join entre tenants não ocorre por design)

### Riscos Identificados

1. **Risco: Vazamento de Dados entre Tenants**
   - **Mitigação**:
     - Row-Level Security (RLS) obrigatório
     - Validação em múltiplas camadas (DB + Aplicação)
     - Testes automatizados de isolamento
     - Code review focado em segurança

2. **Risco: Noisy Neighbor (tenant impacta performance de outros)**
   - **Mitigação**:
     - Rate limiting por tenant
     - Quotas de recursos (transações, storage)
     - Monitoramento por tenant
     - Circuit breaker para tenants problemáticos

3. **Risco: Corrupção de dados afeta todos**
   - **Mitigação**:
     - Backups frequentes e testados
     - Transações bem definidas
     - Validações rigorosas
     - Auditoria completa

4. **Risco: Dificuldade de customização por tenant**
   - **Mitigação**:
     - Sistema de configurações robusto
     - Campos personalizados (custom fields)
     - Tabelas de parâmetros por tenant

## Consequências

### Consequências Positivas

- Redução de custos operacionais em 80-90% comparado a database per tenant
- Time-to-market menor (onboarding instantâneo de novos tenants)
- Facilidade de evolução do sistema (uma só base de código/schema)
- Melhor utilização de recursos computacionais
- Simplicidade arquitetural e operacional

### Consequências Negativas

- Impossibilidade de customizações de schema por tenant
- Necessidade de atenção redobrada com segurança e isolamento
- Maior cuidado com queries (sempre filtrar por OrganizacaoId)
- Dificuldade em migrar tenant individual para outro servidor
- Risco teórico de um tenant impactar outros

### Consequências Neutras

- Código da aplicação deve sempre estar ciente do contexto de tenant
- Testes devem incluir cenários multi-tenant
- Monitoramento deve ter visibilidade por tenant

## Impacto

### Módulos Afetados

- **Todos os módulos**: Devem implementar filtro de tenant em todas as queries
- **Camada de Dados**: Row-Level Security configurado em todas as tabelas com tenant
- **Autenticação**: Contexto de tenant deve estar no token JWT
- **API**: Middleware de tenant-awareness em todas as requisições

### Equipes Afetadas

- **Desenvolvimento**: Deve seguir padrões de tenant-aware coding
- **DBA**: Configurar RLS e monitorar performance por tenant
- **DevOps**: Monitoramento e alertas por tenant
- **QA**: Testes de isolamento entre tenants obrigatórios

### Documentação Afetada

- Modelo de Dados: Todas as tabelas devem especificar se têm ou não tenant
- Padrões de Código: Guidelines para queries tenant-aware
- Segurança: Procedimentos de garantia de isolamento

## Implementação

### Fases de Implementação

1. **Fase 1: Fundação**
   - Definir convenção de campo `OrganizacaoId`
   - Criar tabela de Organizações
   - Implementar context de tenant na aplicação

2. **Fase 2: Row-Level Security**
   - Configurar RLS em PostgreSQL
   - Policies para todas as tabelas com tenant
   - Testes de isolamento

3. **Fase 3: Aplicação**
   - Middleware de tenant-awareness
   - Base repository com filtro automático
   - Auditoria de tentativas de cross-tenant access

4. **Fase 4: Monitoramento**
   - Métricas por tenant
   - Quotas e rate limiting
   - Alertas de comportamento anômalo

### Critérios de Sucesso

- [ ] 100% das queries filtram por OrganizacaoId quando aplicável
- [ ] RLS configurado e testado em todas as tabelas com tenant
- [ ] Testes automatizados garantem isolamento
- [ ] Zero incidentes de vazamento de dados entre tenants
- [ ] Performance aceitável mesmo com 1000+ tenants
- [ ] Onboarding de novo tenant < 1 minuto

## Conformidade

### Como Garantir Conformidade

1. **Code Review**: Todo PR deve ser revisado quanto a tenant-awareness
2. **Linters**: Regras customizadas para detectar queries sem filtro de tenant
3. **Testes Automatizados**: Suite de testes de isolamento multi-tenant
4. **Auditoria**: Log de todas as queries para revisão
5. **Documentação**: Guidelines claros e exemplos no código

### Ferramentas/Automação

- **SonarQube**: Regras customizadas para detecção de anti-patterns
- **PostgreSQL RLS**: Última linha de defesa em banco de dados
- **Integration Tests**: Cenários com múltiplos tenants
- **APM**: Monitoramento de performance por tenant (New Relic, Datadog)

## Referências

- [Multi-Tenant Architecture - SaaS App Design Best Practices](https://relevant.software/blog/multi-tenant-architecture/)
- [Microsoft Azure - SaaS and Multitenant Solution Architecture](https://learn.microsoft.com/en-us/azure/architecture/guide/saas-multitenant-solution-architecture/)
- [Multi-Tenant Database Design Patterns 2024](https://daily.dev/blog/multi-tenant-database-design-patterns-2024)
- [PostgreSQL Row-Level Security](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)

## Relacionamentos

### Relacionado com
- **ADR-002**: Isolamento de Dados (detalha implementação técnica)
- **RF-001**: Multi-Tenancy (requisito funcional que motiva esta decisão)

## Notas Adicionais

Esta decisão não impede evolução futura para modelo híbrido caso surja demanda comprovada. A arquitetura será preparada para permitir essa transição se necessário.

## Participantes da Decisão

- Arquiteto de Software
- Tech Lead
- DBA
- Product Owner

## Histórico

| Versão | Data | Autor | Descrição |
|--------|------|-------|-----------|
| 1.0 | 2025-12-02 | Equipe ANYPRO | Decisão inicial |
