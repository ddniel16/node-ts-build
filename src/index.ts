#!/usr/bin/env node

import { Tools } from './tools.js';
import { config } from './config/env.js';

async function main(): Promise<void> {
  console.log(Tools.info('Iniciando aplicación...'));
  console.log(Tools.greet('Sistema de Build Minimalista'));
  console.log(Tools.info(`Entorno: ${config.nodeEnv}`));
  console.log(Tools.success('Aplicación iniciada correctamente'));

  console.log(Tools.info(`Entorno: ${config.host}:${config.port}`));

  // Aquí puedes agregar tu lógica principal
  if (config.isDevelopment) {
    console.log(Tools.warning('Ejecutando en modo desarrollo'));
  }

  console.log(Tools.info('Aplicación finalizada.'));
}

main().catch((error: Error) => {
  console.error(Tools.error(error.message));
  process.exit(1);
});
