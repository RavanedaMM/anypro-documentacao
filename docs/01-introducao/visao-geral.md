# Visão Geral do Projeto ANYPRO

## Identificação

- **Nome do Projeto**: ANYPRO
- **Tipo**: Sistema ERP (Enterprise Resource Planning)
- **Modelo**: SaaS (Software as a Service) Multi-Tenant
- **Versão da Documentação**: 1.0
- **Data**: 2025-12-02

## O que é o ANYPRO?

O **ANYPRO** é um sistema ERP completo e modular desenvolvido para atender micro, pequenas e médias empresas que necessitam de uma solução integrada de gestão empresarial. Comercializado no modelo **SaaS** (Software como Serviço), permite que múltiplas organizações utilizem o mesmo sistema com total isolamento e segurança de dados através da arquitetura **Multi-Tenant**.

## Propósito

Fornecer uma plataforma robusta, escalável e de fácil implementação que permita às empresas:

- Centralizar a gestão de todos os processos empresariais
- Automatizar operações repetitivas e burocráticas
- Obter visibilidade completa do negócio através de relatórios e dashboards
- Garantir conformidade fiscal e regulatória (especialmente legislação brasileira)
- Escalar conforme o crescimento da organização
- Reduzir custos com infraestrutura e manutenção de sistemas

## Características Principais

### Multi-Tenant SaaS

O sistema permite que múltiplas **Organizações** (tenants) compartilhem a mesma infraestrutura e aplicação, com total isolamento de dados entre elas. Cada organização:

- Possui seus próprios dados completamente isolados
- Tem um plano de assinatura independente
- Gerencia suas próprias Empresas (CNPJ)
- Configura parâmetros específicos para suas necessidades

### Modularidade

O sistema é organizado em **9 módulos principais**:

1. **ADM** - Administração (usuários, perfis, autorizações)
2. **SUP** - Suprimentos (compras, estoque, fornecedores)
3. **COM** - Comercial (vendas, clientes, propostas)
4. **CON** - Contabilidade (plano de contas, lançamentos)
5. **FIN** - Financeiro (contas a pagar/receber, fluxo de caixa)
6. **RHU** - Recursos Humanos (folha, ponto, benefícios)
7. **PRO** - Projetos (tarefas, recursos, custos)
8. **CRM** - CRM (leads, oportunidades, campanhas)
9. **CSU** - Central de Suporte (tickets, SLA, knowledge base)

Cada módulo pode ser ativado/desativado conforme o plano de assinatura da organização.

### Hierarquia Organizacional

```
Organização (Tenant)
  └─── Empresa 1 (CNPJ)
  └─── Empresa 2 (CNPJ)
  └─── Empresa N (CNPJ)
```

- **Organização**: É o consolidador contábil e comercial (tenant)
- **Empresa**: Representa uma entidade jurídica (CNPJ) com parâmetros fiscais e contábeis próprios

Uma organização pode gerenciar múltiplas empresas, facilitando a gestão de grupos empresariais.

### Compliance Fiscal Brasileiro

O sistema atende às exigências da legislação brasileira:

- **SPED Fiscal** (ICMS/IPI)
- **SPED Contábil** (ECD - Escrituração Contábil Digital)
- **SPED Contribuições** (PIS/COFINS)
- **NF-e** (Nota Fiscal Eletrônica)
- **NFC-e** (Nota Fiscal de Consumidor Eletrônica)
- **NFS-e** (Nota Fiscal de Serviço Eletrônica)
- **CT-e** (Conhecimento de Transporte Eletrônico)
- **eSocial** (Escrituração Digital das Obrigações Fiscais)
- **EFD-REINF** (Escrituração Fiscal Digital de Retenções)

### Internacionalização

Embora inicialmente focado no Brasil:

- **Multi-idioma**: Preparado para suportar múltiplos idiomas (iniciando com Português do Brasil)
- **Multi-país**: Arquitetura permite expansão para outros países com diferentes regras fiscais e contábeis

### Áreas de Navegação

O sistema é dividido em duas áreas principais:

#### Área de Trabalho
Onde usuários executam suas atividades diárias:
- Dashboard com informações relevantes
- Acesso rápido às funcionalidades mais usadas
- Fluxos operacionais
- Consultas e relatórios

#### Área de Configuração
Área administrativa para gestão do sistema:
- Parâmetros globais e por tenant
- Cadastros base
- Gestão de usuários e permissões
- Configurações fiscais e contábeis
- Integrações externas

## Público-Alvo

### Clientes Finais (Organizações)

- **Micro e Pequenas Empresas**: Que necessitam automatizar processos básicos
- **Médias Empresas**: Com múltiplas áreas e necessidade de integração
- **Grupos Empresariais**: Com múltiplos CNPJ sob gestão centralizada
- **Empresas de Serviços**: Que precisam de gestão de projetos e clientes
- **Comércio**: Que necessitam controle de estoque e vendas
- **Indústria**: Com necessidades de controle de produção e custos

### Usuários do Sistema

- **Administradores**: Gestão da organização e configurações
- **Gestores**: Tomada de decisão e acompanhamento de indicadores
- **Operadores**: Execução de processos diários (vendas, compras, financeiro)
- **Contadores**: Escrituração contábil e fiscal
- **RH**: Gestão de pessoas e folha de pagamento

## Diferenciais

### Técnicos

- Arquitetura moderna baseada em Clean Architecture e DDD
- Vertical Slice Architecture para modularidade real
- CQRS para separação de comandos e consultas
- Event-Driven para integrações assíncronas
- APIs REST para integração com sistemas externos
- Multi-tenant nativo desde a concepção

### Funcionais

- Interface moderna e intuitiva
- Dashboards customizáveis por usuário
- Relatórios gerenciais integrados
- Auditoria completa de todas as operações
- Workflow de aprovações configurável
- Notificações em tempo real
- Acesso mobile (futuro)

### Comerciais

- Modelo de assinatura flexível (planos modulares)
- Pagamentos recorrentes automatizados
- Onboarding simplificado
- Suporte técnico integrado
- Atualizações automáticas sem interrupção
- Sem necessidade de infraestrutura própria

## Benefícios Esperados

### Para as Organizações

- **Redução de Custos**: Elimina infraestrutura própria e manutenção de sistemas
- **Agilidade**: Processos automatizados e integrados
- **Visibilidade**: Informações consolidadas e em tempo real
- **Compliance**: Conformidade fiscal garantida
- **Escalabilidade**: Cresce junto com a empresa
- **Flexibilidade**: Módulos ativados conforme necessidade

### Para os Usuários

- **Produtividade**: Menos tempo em tarefas manuais
- **Facilidade de Uso**: Interface intuitiva e moderna
- **Acesso Remoto**: Disponível de qualquer lugar
- **Informação Confiável**: Dados integrados e auditados
- **Autonomia**: Self-service para consultas e relatórios

## Escopo do Projeto

### Dentro do Escopo

- Sistema ERP web multi-tenant completo
- 9 módulos principais funcionais
- Integrações fiscais brasileiras (SPED, NF-e, etc.)
- APIs REST para integrações externas
- Portal de administração
- Área de trabalho operacional
- Dashboards e relatórios gerenciais
- Auditoria e logs
- Multi-idioma (PT-BR inicial)

### Fora do Escopo (Fase Inicial)

- Aplicativo mobile nativo
- Integração com ERPs legados específicos
- Business Intelligence avançado (BI externo)
- Módulos específicos de indústria (ex: produção avançada)
- Suporte a países fora do Brasil (expansão futura)

## Premissas

- Organizações possuem acesso à internet
- Usuários têm conhecimento básico de gestão empresarial
- Empresas possuem certificado digital A1 ou A3 para assinatura de documentos fiscais
- Dados fiscais fornecidos estão corretos e atualizados

## Restrições

- Desenvolvido inicialmente apenas para legislação brasileira
- Requer navegador web moderno (últimas 2 versões de Chrome, Firefox, Edge)
- Dados armazenados em cloud (não há versão on-premise na fase inicial)
- Integrações externas dependem de APIs disponibilizadas por terceiros

## Histórico

| Versão | Data | Autor | Descrição |
|--------|------|-------|-----------|
| 1.0 | 2025-12-02 | Equipe ANYPRO | Criação inicial da documentação |
