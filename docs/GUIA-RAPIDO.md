# 🚀 Guia Rápido - Nova Documentação ANYPRO

## O que mudou?

A documentação do projeto ANYPRO foi **completamente reestruturada** seguindo padrões internacionais de documentação de software (arc42 + C4 Model), adaptados para sistemas ERP multi-tenant.

## Principais Mudanças

### ✅ De HTML para Markdown

**Antes**: Documentação em arquivos HTML (difícil de versionar e editar)
**Agora**: Documentação em Markdown (fácil de versionar, editar e colaborar via Git)

### ✅ Estrutura Hierárquica Organizada

**Antes**: Estrutura plana com páginas HTML individuais
**Agora**: Estrutura hierárquica com 12 seções principais

### ✅ Foco em Definições Funcionais

**Antes**: Mistura de conceitos e códigos
**Agora**: **Apenas definições funcionais**, sem exemplos de código

### ✅ Templates Padronizados

**Antes**: Sem padrão definido para documentação
**Agora**: 5 templates reutilizáveis para padronizar toda a documentação

## Nova Estrutura

```
docs/
├── INDEX.md                     # 👈 COMECE AQUI
├── GUIA-RAPIDO.md              # 👈 VOCÊ ESTÁ AQUI
│
├── 01-introducao/              # Contexto e visão geral
├── 02-requisitos/              # RF, RNF, fiscais, i18n
├── 03-modelo-negocio/          # SaaS, tenants, planos
├── 04-arquitetura/             # Decisões, diagramas, padrões
├── 05-modelo-dados/            # Banco de dados conceitual
├── 06-modulos/                 # 9 módulos do ERP
├── 07-processos-negocio/       # Fluxos completos
├── 08-integracao-api/          # APIs REST
├── 09-interface-usuario/       # UX e navegação
├── 10-seguranca-compliance/    # Segurança e LGPD
├── 11-qualidade/               # Atributos e métricas
├── 12-glossario/               # Termos e acrônimos
│
└── _templates/                 # Templates reutilizáveis
    ├── template-requisito-funcional.md
    ├── template-caso-uso.md
    ├── template-adr.md
    ├── template-feature.md
    └── template-entidade.md
```

## Por onde começar?

### Se você é Desenvolvedor

1. **[docs/INDEX.md](INDEX.md)** - Índice geral
2. **[docs/04-arquitetura/](04-arquitetura/)** - Entender decisões arquiteturais
3. **[docs/04-arquitetura/decisoes-arquiteturais/ADR-001-estrategia-multi-tenant.md](04-arquitetura/decisoes-arquiteturais/ADR-001-estrategia-multi-tenant.md)** - Decisão crítica sobre multi-tenancy
4. **[docs/05-modelo-dados/](05-modelo-dados/)** - Estrutura do banco de dados
5. **[docs/_templates/](\_templates/)** - Templates para documentar seu código

### Se você é Analista de Negócio

1. **[docs/INDEX.md](INDEX.md)** - Índice geral
2. **[docs/01-introducao/visao-geral.md](01-introducao/visao-geral.md)** - Visão geral do sistema
3. **[docs/02-requisitos/](02-requisitos/)** - Requisitos funcionais e não-funcionais
4. **[docs/06-modulos/](06-modulos/)** - Módulos específicos
5. **[docs/07-processos-negocio/](07-processos-negocio/)** - Fluxos completos

### Se você é Arquiteto

1. **[docs/INDEX.md](INDEX.md)** - Índice geral
2. **[docs/04-arquitetura/principios-arquiteturais.md](04-arquitetura/principios-arquiteturais.md)** - Princípios
3. **[docs/04-arquitetura/decisoes-arquiteturais/](04-arquitetura/decisoes-arquiteturais/)** - Todos os ADRs
4. **[docs/04-arquitetura/diagramas-c4/](04-arquitetura/diagramas-c4/)** - Diagramas C4
5. **[docs/04-arquitetura/padroes-arquiteturais/](04-arquitetura/padroes-arquiteturais/)** - Padrões aplicados

### Se você é Gestor

1. **[docs/INDEX.md](INDEX.md)** - Índice geral
2. **[docs/01-introducao/objetivos-negocio.md](01-introducao/objetivos-negocio.md)** - Objetivos
3. **[docs/01-introducao/stakeholders.md](01-introducao/stakeholders.md)** - Stakeholders
4. **[docs/03-modelo-negocio/](03-modelo-negocio/)** - Modelo SaaS

## Como Documentar?

### 1. Escolha o Template Adequado

Na pasta [`docs/_templates/`](_templates/) você encontra 5 templates:

| Template | Quando usar |
|----------|-------------|
| **template-requisito-funcional.md** | Para documentar novos requisitos funcionais |
| **template-caso-uso.md** | Para documentar casos de uso detalhados |
| **template-adr.md** | Para documentar decisões arquiteturais importantes |
| **template-feature.md** | Para documentar uma feature (Vertical Slice) |
| **template-entidade.md** | Para documentar entidades do domínio |

### 2. Copie o Template

```bash
# Exemplo: Criar novo requisito funcional
cp docs/_templates/template-requisito-funcional.md \
   docs/02-requisitos/requisitos-funcionais/RF-XXX-nome-do-requisito.md
```

### 3. Preencha o Template

Abra o arquivo copiado e preencha todas as seções seguindo as instruções dentro do template.

### 4. Siga os Princípios

**✅ FAÇA:**
- Escreva definições funcionais claras
- Use linguagem objetiva e precisa
- Documente o "O QUÊ" e o "POR QUÊ"
- Inclua diagramas quando necessário
- Mantenha consistência com outros documentos

**❌ NÃO FAÇA:**
- Não inclua exemplos de código
- Não use termos técnicos sem definir no glossário
- Não deixe seções vazias (remova se não aplicável)
- Não defina prazos ou datas
- Não faça documentação que será obsoleta rapidamente

## Convenções de Nomenclatura

### Arquivos

- Use kebab-case: `nome-do-arquivo.md`
- Prefixos para requisitos: `RF-001-`, `RNF-001-`, `ADR-001-`
- Seja descritivo no nome do arquivo

### Títulos

- Use `#` para título principal (H1 - apenas um por arquivo)
- Use `##` para seções principais
- Use `###` para subseções

### Links Internos

```markdown
[Texto do Link](caminho/relativo/arquivo.md)
[Ver Visão Geral](../01-introducao/visao-geral.md)
```

## Padrões Seguidos

Esta documentação segue os seguintes padrões internacionais:

### arc42
Framework de documentação de arquitetura de software criado por Gernot Starke e Peter Hruschka.
- Website: https://arc42.org/
- Fornece estrutura de 12 seções para documentar arquitetura

### C4 Model
Modelo de visualização de arquitetura criado por Simon Brown.
- Website: https://c4model.com/
- 4 níveis: Contexto, Containers, Componentes, Código

### IEEE 29148
Padrão internacional para especificação de requisitos de software.
- Substitui o IEEE 830
- Define estrutura para requisitos funcionais e não-funcionais

## Migração da Documentação Antiga

A documentação HTML antiga (`index.html`, `pages/*.html`) ainda está presente e será migrada gradualmente para a nova estrutura Markdown.

**Status da Migração:**

- [ ] Visão Geral → `docs/01-introducao/`
- [ ] Arquitetura → `docs/04-arquitetura/`
- [ ] Modelo de Dados → `docs/05-modelo-dados/`
- [ ] Módulos → `docs/06-modulos/`
- [ ] APIs → `docs/08-integracao-api/`
- [ ] Demais seções

## Ferramentas Recomendadas

### Para Editar Markdown

- **VS Code** com extensões:
  - Markdown All in One
  - Markdown Preview Enhanced
  - Markdownlint

### Para Visualizar

- **VS Code**: Ctrl+Shift+V (Preview)
- **GitHub**: Renderiza automaticamente
- **MkDocs**: Para gerar site estático (futuro)

### Para Diagramas

- **Draw.io**: Para diagramas C4
- **PlantUML**: Para diagramas textuais
- **Mermaid**: Para diagramas em Markdown

## Perguntas Frequentes

### Por que migrar de HTML para Markdown?

**Markdown**:
- ✅ Fácil de versionar (Git diff funciona)
- ✅ Fácil de editar (qualquer editor de texto)
- ✅ Fácil de revisar (Pull Requests)
- ✅ Portável (pode gerar HTML, PDF, etc.)
- ✅ Padrão da indústria

### Por que não incluir código na documentação?

Código envelhece rápido e cria manutenção duplicada. Esta documentação foca em:
- **Definições funcionais** (não mudam tanto)
- **Decisões arquiteturais** (contexto e justificativa)
- **Requisitos de negócio** (o que precisa ser feito)

O código deve ser autodocumentado e ter comentários inline.

### Como atualizar esta documentação?

1. Crie uma branch: `git checkout -b docs/nome-da-mudanca`
2. Edite os arquivos Markdown necessários
3. Commit: `git commit -m "docs: descrição da mudança"`
4. Push: `git push origin docs/nome-da-mudanca`
5. Abra um Pull Request no GitHub

### Quando criar um ADR?

Crie um ADR quando tomar uma decisão arquitetural que:
- Tem impacto significativo no sistema
- Afeta múltiplos módulos ou equipes
- Teve alternativas consideradas
- Precisa ser justificada no futuro
- Pode ser questionada ou revisitada

## Recursos Adicionais

### Leitura Recomendada

- [arc42 Documentation](https://docs.arc42.org/)
- [C4 Model Guide](https://c4model.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Writing Good ADRs](https://adr.github.io/)

### Exemplos

Todos os templates em `docs/_templates/` contêm exemplos e instruções detalhadas.

## Suporte

Dúvidas ou sugestões sobre a documentação:

- **GitHub Issues**: [Criar issue](https://github.com/RavanedaMM/anypro-documentacao/issues)
- **Pull Requests**: Contribuições são bem-vindas!

---

**Boa documentação! 🚀**
