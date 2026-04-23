# dados-abertos-PE

This is a NestJS API that exposes public data from Pernambuco (dados abertos). Built with NestJS 11 and TypeScript.

## Dev commands

```bash
npm run start:dev   # start with watch mode
npm run build       # compile to dist/
npm run start:prod  # run compiled build
npm test            # unit tests
npm run test:cov    # unit tests with coverage
npm run test:e2e    # e2e tests
npm run lint        # lint and autofix
npm run format      # prettier format
```

## Project structure

```
src/
├── main.ts                              # bootstrap
├── app.module.ts                        # root module — imports only, no logic
├── shared/                              # cross-cutting concerns
│   └── health/
│       ├── health.module.ts             # HealthModule
│       └── health.controller.ts        # GET /health
└── modules/                             # domain modules
    └── <domain>/
        ├── domain/                      # entities, value objects, repository interfaces
        ├── application/                 # use cases, DTOs
        ├── infrastructure/              # repository implementations, external services
        ├── presentation/                # controllers
        └── <domain>.module.ts
```

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary>

[optional body]

[optional footer(s)]
```

### Types

| Type | When to use |
|------|-------------|
| `feat` | New feature visible to users or consumers |
| `fix` | Bug fix |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `test` | Adding or updating tests |
| `docs` | Documentation only |
| `chore` | Build process, tooling, dependency updates |
| `perf` | Performance improvement |
| `ci` | CI/CD configuration changes |

### Examples

```
feat(health): add liveness probe endpoint
fix(users): handle missing CPF in payload
refactor(table): extract pagination logic into helper
test(repo-table): add unit tests for filter edge cases
chore: update NestJS to v11.1
feat(api)!: remove deprecated v1 endpoints
```

### Rules

- **Small, atomic commits** — each commit contains a single logical change (one feature, one fix, one refactor); never bundle unrelated changes
- Description in English, imperative mood, no period at end (`add` not `adds` or `added`)
- Optional scope in parentheses after the type: `feat(table)`, `fix(api)`, `test(repo-table)`
- Breaking changes: append `!` after the type (`feat!`) or add `BREAKING CHANGE:` in the footer

## Conventions

- One folder per feature under `src/` (e.g. `src/health/`, `src/users/`)
- Controller handles HTTP only — business logic lives in the service
- No logic inside `app.module.ts` — it only wires modules together
- Unit tests co-located with source: `*.spec.ts` next to the file under test
- E2e tests live in `test/`

## npm registry

The local npm registry (`nexus.bradescoseguros.com.br`) may be unavailable outside the corporate network. Use the public registry when needed:

```bash
npm install --registry https://registry.npmjs.org <package>
```

## Claude Code shared config

The `.claude/` folder is committed to the repo so all developers share the same setup.

| Type | Name | Usage |
|------|------|-------|
| Command | `/fix-issue <number>` | Fetches a GitHub issue and fixes it |
| Agent | `code-reviewer` | Reviews code for correctness, security, and maintainability |
| Skill | `/security-review [branch]` | Audits diff for security vulnerabilities |
| Skill | `/unit-testing [branch]` | Audits diff for test coverage and code quality |
