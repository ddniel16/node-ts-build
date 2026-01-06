# GitHub Actions Workflows

## Build, Lint, Test & Release

Este workflow se ejecuta automáticamente cuando se crea un tag en el repositorio.

### Jobs

#### 1. `lint-and-test`

Ejecuta validaciones de código y tests:

- ✅ Linting con ESLint
- ✅ Type checking con TypeScript
- ✅ Format checking con Prettier
- ✅ Tests con Vitest + cobertura
- ✅ Build de producción
- ✅ Verificación de artefactos

#### 2. `publish-npm`

Publica el paquete en npm registry (requiere tag desde `main`).

#### 3. `publish-github`

Publica el paquete en GitHub Packages (requiere tag desde `main`).

### Configuración Requerida

Para que funcione la publicación automática, configura estos secrets:

- `NPM_TOKEN`: Token de npm con permisos de publicación
- `GITHUB_TOKEN`: Token automático de GitHub (pre-configurado)

### Umbrales de Cobertura

El CI falla si no se cumple:

- **Lines**: 70%
- **Functions**: 70%
- **Branches**: 60%
- **Statements**: 70%

Ajusta estos valores en [`vitest.config.ts`](vitest.config.ts).
