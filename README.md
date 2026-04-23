# dados-abertos-PE

> Study project — built for learning purposes only.

A REST API built with [NestJS](https://nestjs.com/) that exposes publicly available data from the state of Pernambuco, Brazil. The data is sourced from the official open data portal and is legally available for public use.

**Data source:** [Relatório de Pagamento de Shows e Eventos — dados.pe.gov.br](https://dados.pe.gov.br/dataset/relatorio-de-pagamento-de-shows-e-eventos/resource/181810c3-883b-4d11-83de-191e21ccd17e?view_id=7a2a8594-0fb7-4caa-a929-568e64542a19)

## Tech stack

- [NestJS 11](https://nestjs.com/) — Node.js framework
- TypeScript

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run start:dev
```

### Run in production

```bash
npm run build
npm run start:prod
```

## Available endpoints

| Method | Path      | Description        |
|--------|-----------|--------------------|
| GET    | `/`       | Root endpoint      |
| GET    | `/health` | Health check       |

## Tests

```bash
# Unit tests
npm test

# Unit tests with coverage
npm run test:cov
```

## Claude Code setup

This project ships a shared [Claude Code](https://claude.ai/code) configuration committed to the repo so every developer gets the same AI-assisted workflow out of the box.

### CLAUDE.md

[`CLAUDE.md`](CLAUDE.md) is the project-level instruction file read by Claude Code at the start of every session. It documents:

- Dev commands and how to run the project
- Project structure and conventions
- Commit message rules (Conventional Commits)
- npm registry notes

Think of it as the project's "onboarding doc for the AI" — keeping it up to date ensures Claude always has accurate context.

### .claude/ folder

The [`.claude/`](.claude/) folder holds reusable Claude Code tools shared across the team:

```
.claude/
├── agents/
│   └── code-reviewer.md       # Sub-agent that reviews code for correctness, security, and maintainability
├── commands/
│   └── fix-issue.md           # /fix-issue <number> — fetches a GitHub issue and implements the fix
└── skills/
    ├── security-review/       # /security-review — audits branch diff for security vulnerabilities
    └── unit-testing/          # /unit-testing — audits diff for test coverage and code quality
```

To use these inside Claude Code, prefix the name with `/` (e.g. `/fix-issue 42`, `/security-review`).

## License

MIT
