# 🚀 ANYPRO - Documentação do Projeto

Sistema ERP Modular Multi-Tenant desenvolvido em .NET 8 + React + PostgreSQL.

## 📋 Visão Geral

O **ANYPRO** é um sistema ERP completo e modular que pode ser customizado de acordo com as necessidades de cada organização. Desenvolvido no modelo **SaaS (Software as a Service)** com arquitetura **Multi-Tenant**, permitindo que múltiplas organizações utilizem o mesmo sistema com total isolamento de dados.

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
- ✅ CQRS (Command Query Responsibility Segregation)
- ✅ Repository Pattern
- ✅ Unit of Work
- ✅ Dependency Injection

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

A documentação completa do projeto está disponível em:

- **Arquivo HTML**: Abra `index.html` no navegador
- **Live Server**: Use a extensão Live Server do VS Code para auto-reload

### Seções da Documentação

1. **Visão Geral** - Introdução e características
2. **Arquitetura** - Stack, padrões e estrutura
3. **Sistema (SIS)** - Inicialização de dados
4. **Modelo de Dados** - Convenções e entidades
5. **Módulos** - Detalhamento de cada módulo
6. **Roadmap** - Planejamento de desenvolvimento
7. **APIs** - Documentação de endpoints
8. **Testes** - Estratégia e exemplos
9. **Glossário** - Termos técnicos
10. **Referências** - Links e fontes externas

## 📊 Progresso do Projeto

- 📝 Documentação: **70%**
- 💻 Backend: **20%**
- 🎨 Frontend: **15%**
- 🧪 Testes: **10%**

## 🗓️ Roadmap 2026

### Q1 (Jan-Mar) - MVP Foundation
- ✅ Estrutura de projetos
- ✅ Docker setup
- 🔄 Módulo ADM (Administração)
- 🔄 Sistema SIS (Seeders)

### Q2 (Abr-Jun) - Módulos Core
- 📋 Módulo SUP (Suprimentos)
- 📋 Módulo FIN (Financeiro)
- 📋 Dashboard principal

### Q3 (Jul-Set) - Expansão
- 📋 Módulo COM (Comercial)
- 📋 Módulo CRM
- 📋 Integração NFe

### Q4 (Out-Dez) - Finalização
- 📋 Módulo RHU
- 📋 App Mobile
- 📋 Lançamento Beta

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
