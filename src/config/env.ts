// Entornos disponibles
type Environment = 'development' | 'production' | 'test' | 'staging';

// Configuración por entorno
const envConfigs: Record<Environment, { host: string; port: number; debug: boolean }> = {
  development: {
    host: '127.0.0.1',
    port: 3000,
    debug: true,
  },
  production: {
    host: '0.0.0.0',
    port: 8080,
    debug: false,
  },
  staging: {
    host: '0.0.0.0',
    port: 8080,
    debug: true,
  },
  test: {
    host: '127.0.0.1',
    port: 3001,
    debug: true,
  },
};

// Función para obtener variable de entorno con soporte para diferentes formatos
function getEnvVar(key: string): string | undefined {
  return process.env[key];
}

// Función para parsear booleanos de variables de entorno
function parseBoolean(value: string | undefined, defaultValue: boolean): boolean {
  if (value === undefined) return defaultValue;
  return value.toLowerCase() === 'true' || value === '1';
}

// Obtener el entorno actual
const currentEnv = (getEnvVar('NODE_ENV') || 'development') as Environment;

// Validar que el entorno sea válido
if (!envConfigs[currentEnv]) {
  throw new Error(
    `Entorno inválido: ${currentEnv}. Debe ser uno de: ${Object.keys(envConfigs).join(', ')}`
  );
}

// Configuración final (prioriza variables de entorno sobre configuración por defecto)
export const config = {
  // Información del entorno
  nodeEnv: currentEnv,
  isDevelopment: currentEnv === 'development',
  isProduction: currentEnv === 'production',
  isTest: currentEnv === 'test',
  isStaging: currentEnv === 'staging',

  // Configuración específica del entorno (con override desde variables de entorno)
  host: getEnvVar('HOST') || envConfigs[currentEnv].host,
  port: getEnvVar('PORT') ? parseInt(getEnvVar('PORT')!, 10) : envConfigs[currentEnv].port,
  debug:
    getEnvVar('DEBUG') !== undefined
      ? parseBoolean(getEnvVar('DEBUG'), envConfigs[currentEnv].debug)
      : envConfigs[currentEnv].debug,

  // Variables de entorno adicionales
  logLevel: getEnvVar('LOG_LEVEL') || (currentEnv === 'production' ? 'info' : 'debug'),
  apiUrl: getEnvVar('API_URL') || 'http://localhost:3000/api',
} as const;
