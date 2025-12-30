import { build } from 'esbuild';

const isProduction = process.env.NODE_ENV === 'production';

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'node20',
  outfile: 'dist/app.js',
  minify: isProduction,
  sourcemap: true,
  external: [], // Dependencias a excluir del bundle
  metafile: true,
  logLevel: 'info',
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
}).catch(() => process.exit(1));
