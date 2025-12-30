# TypeScript Template

Template de proyecto TypeScript con build usando esbuild.

## 📋 Características

- ⚡ **Build ultra rápido** con esbuild
- 🔧 **TypeScript 5.9+** con configuración estricta
- 📦 **ES Modules** nativos
- 🎨 **ESLint + Prettier** preconfigurados
- 🔄 **Hot reload** en desarrollo
- 🌍 **Gestión de entornos** con soporte nativo de Node.js
- 📊 **SBOM** y auditoría de licencias

## 🚀 Inicio Rápido

### Requisitos

- Node.js 20+
- pnpm 9+

### Instalación

```bash
# Clonar el repositorio (o usar como template)
git clone <tu-repositorio>
cd typescript-template

# Instalar dependencias
pnpm install

# Configurar variables de entorno (opcional)
cp .env.example .env
```

### Desarrollo

```bash
# Compilar y ejecutar
node --run dev

# Modo watch (recompila y ejecuta automáticamente con cada cambio)
node --run watch

# Solo compilar
node --run build

# Solo ejecutar (requiere compilar primero)
node --run start
```

## 📦 Scripts Disponibles

| Script | Descripción |
|-|-|
| `pnpm run clean` | Limpia la carpeta dist |
| `pnpm run type-check` | Valida tipos sin generar archivos |
| `pnpm run build` | Build completo con validación de tipos |
| `pnpm run build:bundle` | Solo bundling sin validación |
| `pnpm run build:prod` | Build minificado para producción |
| `pnpm run watch` | Build + ejecución automática en cada cambio |
| `pnpm run start` | Ejecuta la aplicación compilada |
| `pnpm run start:env` | Ejecuta con archivo .env |
| `pnpm run dev` | Build + start (desarrollo rápido) |
| `pnpm run dev:env` | Build + start con archivo .env |
| `pnpm run lint` | Validar código con ESLint |
| `pnpm run format` | Formatear código con Prettier |
| `pnpm run format:check` | Verificar formato sin modificar |
| `pnpm run sbom` | Generar Software Bill of Materials |
| `pnpm run licenses` | Listar licencias de dependencias |

## ⚙️ Configuración de Entornos

El proyecto soporta múltiples entornos: `development`, `production`, `staging` y `test`.

## 🚢 Deployment

### Build de Producción

```bash
# Generar build minificado
pnpm run build:prod

pnpm install --prod

# Ejecutar en producción
node --run start
```
