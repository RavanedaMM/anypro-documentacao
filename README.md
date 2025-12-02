# 🚀 ANYPRO - Documentação do Projeto

Sistema ERP Modular Multi-Tenant desenvolvido em .NET 8 + React + PostgreSQL.

## 📋 Visão Geral

O **ANYPRO** é um sistema ERP completo e modular desenvolvido para atender empresas brasileiras no modelo **SaaS (Software as a Service)**. Com arquitetura **Multi-Tenant**, permite que múltiplas organizações utilizem o mesmo sistema com total isolamento e segurança de dados.

### Principais Características

✅ **Multi-Tenant Nativo** - Isolamento completo de dados por organização
✅ **Modular** - 9 módulos ativáveis conforme necessidade
✅ **Compliance Fiscal BR** - SPED, NF-e, eSocial e demais obrigações
✅ **Clean Architecture** - Baseado em DDD, CQRS e Vertical Slice
✅ **Escalável** - Preparado para crescimento horizontal
✅ **Multi-Idioma/País** - Iniciando com PT-BR, expansível

### Modelo Organizacional

```
Organização (Tenant)
  ├─── Plano de Assinatura
  ├─── Usuários
  ├─── Empresa 1 (CNPJ)
  │     ├─── Parâmetros Fiscais
  │     └─── Movimentações
  └─── Empresa N (CNPJ)
```

[Ver detalhes completos →](docs/01-introducao/visao-geral.md)

## 🎯 Módulos do Sistema

- **ADM** - Administração (usuários, perfis, autorizações)
- **SUP** - Suprimentos (compras, estoque, fornecedores)
- **COM** - Comercial (vendas, clientes, propostas)
- **CON** - Contabilidade (plano de contas, lançamentos)
- **FIN** - Financeiro (contas a pagar/receber, fluxo de caixa)
- **RHU** - Recursos Humanos (folha, ponto, benefícios)
- **PRO** - Projetos (tarefas, recursos, custos)
- **CRM** - CRM (leads, oportunidades, campanhas)
- **CSU** - Central de Suporte (tickets, SLA, knowledge base)

## 🏗️ Arquitetura

### Stack Tecnológico

**Backend:**
- .NET 8.0
- ASP.NET Core Web API
- Entity Framework Core 8.0
- PostgreSQL 16+
- Redis (cache)
- Hangfire (jobs)

**Frontend:**
- React 18+ com TypeScript
- Material-UI (MUI)
- Redux Toolkit
- React Query
- Vite

**Infraestrutura:**
- Docker & Docker Compose
- Kubernetes (produção)
- NGINX
- GitHub Actions (CI/CD)

### Padrões Arquiteturais

- ✅ Clean Architecture
- ✅ Domain-Driven Design (DDD)
- ✅ Vertical Slice Architecture
- ✅ CQRS (Command Query Responsibility Segregation)
- ✅ Event-Driven Architecture
- ✅ Repository Pattern
- ✅ Unit of Work
- ✅ Dependency Injection

### Decisões Arquiteturais Importantes

- [ADR-001: Estratégia Multi-Tenant](docs/04-arquitetura/decisoes-arquiteturais/ADR-001-estrategia-multi-tenant.md) - Shared DB + Shared Schema
- [ADR-004: Vertical Slice Architecture](docs/04-arquitetura/decisoes-arquiteturais/ADR-004-vertical-slice.md) - Organização por features

## 📂 Estrutura do Projeto

```
Anypro.Backend/
├── src/
│   ├── Anypro.Domain/         # Entidades, Value Objects, Interfaces
│   ├── Anypro.Application/    # Use Cases, DTOs, CQRS
│   ├── Anypro.Infrastructure/ # EF Core, Repositórios, Serviços
│   ├── Anypro.WebAPI/        # Controllers, Middleware
│   └── Anypro.Shared/        # Classes compartilhadas
├── tests/
│   ├── Anypro.UnitTests/
│   ├── Anypro.IntegrationTests/
│   └── Anypro.E2ETests/
└── docker-compose.yml
```

## 🚀 Como Executar

### Pré-requisitos

- .NET 8 SDK
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 16+ (ou via Docker)

### Executar com Docker

```bash
# Clone o repositório
git clone https://github.com/RavanedaMM/anypro-documentacao.git
cd anypro-documentacao

# Subir containers
docker-compose up -d

# Acessar
# API: http://localhost:5000
# Frontend: http://localhost:3000
```

### Executar Backend (.NET)

```bash
cd Anypro.Backend/src/Anypro.WebAPI
dotnet restore
dotnet ef database update
dotnet run
```

### Executar Frontend (React)

```bash
cd Anypro.Frontend
npm install
npm run dev
```

## 🧪 Executar Testes

```bash
# Testes unitários
dotnet test --filter Category=Unit

# Testes de integração
dotnet test --filter Category=Integration

# Todos os testes com cobertura
dotnet test /p:CollectCoverage=true /p:CoverletOutputFormat=opencover
```

## 📚 Documentação

A documentação completa do projeto foi reestruturada seguindo padrões internacionais (arc42 + C4 Model) e está disponível em:

### [📖 Documentação Completa (Markdown)](docs/INDEX.md)

**Nova Estrutura Organizada:**

```
docs/
├── 01-introducao/               # Visão geral, objetivos, stakeholders
├── 02-requisitos/               # Funcionais, não-funcionais, fiscais
├── 03-modelo-negocio/           # SaaS, organizações, planos
├── 04-arquitetura/              # ADRs, C4 diagrams, padrões
├── 05-modelo-dados/             # Conceitual, tabelas, entidades
├── 06-modulos/                  # 9 módulos detalhados
├── 07-processos-negocio/        # Fluxos end-to-end
├── 08-integracao-api/           # REST APIs, endpoints
├── 09-interface-usuario/        # UX, navegação
├── 10-seguranca-compliance/     # Segurança, LGPD, auditoria
├── 11-qualidade/                # Atributos, critérios
├── 12-glossario/                # Termos e acrônimos
└── _templates/                  # Templates reutilizáveis
```

### 📝 Templates Disponíveis

Use os templates para criar documentação padronizada:

- [Requisito Funcional](docs/_templates/template-requisito-funcional.md)
- [Caso de Uso](docs/_templates/template-caso-uso.md)
- [ADR (Decisão Arquitetural)](docs/_templates/template-adr.md)
- [Feature (Vertical Slice)](docs/_templates/template-feature.md)
- [Entidade de Dados](docs/_templates/template-entidade.md)

### 🌐 Documentação HTML (Legado)

A documentação HTML anterior ainda está disponível em `index.html` e será migrada gradualmente

## 📊 Progresso do Projeto

- 📝 Documentação: **70%**
- 💻 Backend: **20%**
- 🎨 Frontend: **15%**
- 🧪 Testes: **10%**

## 📖 Compliance Fiscal Brasileiro

O sistema atende integralmente às exigências da Receita Federal:

✅ **SPED Fiscal** - ICMS/IPI
✅ **SPED Contábil** - ECD
✅ **SPED Contribuições** - PIS/COFINS
✅ **NF-e / NFC-e / NFS-e** - Notas Fiscais Eletrônicas
✅ **CT-e** - Conhecimento de Transporte
✅ **eSocial** - Escrituração Digital das Obrigações
✅ **EFD-REINF** - Retenções e Informações Fiscais

[Ver requisitos fiscais completos →](docs/02-requisitos/requisitos-fiscais-brasil/)

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Convenções de Código

### Backend (.NET)
- Nomenclatura: PascalCase para classes, métodos e propriedades
- Namespaces: `Anypro.{Camada}.{Módulo}`
- Testes: sufixo `Tests` (ex: `UsuarioServiceTests`)

### Frontend (React)
- Componentes: PascalCase (ex: `UserList.tsx`)
- Hooks: prefixo `use` (ex: `useAuth.ts`)
- Utilitários: camelCase (ex: `formatDate.ts`)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

- **Desenvolvedores**: A definir
- **Arquiteto**: A definir
- **Product Owner**: A definir

## 📞 Contato

- **Email**: contato@anypro.com.br
- **Website**: https://anypro.com.br
- **GitHub**: https://github.com/RavanedaMM/anypro-documentacao

---

**ANYPRO** - Sistema ERP Modular Multi-Tenant © 2025-2026
