import { describe, it, expect, afterEach } from 'vitest';

describe('Configuración de Entornos', () => {
  const originalEnv = process.env.NODE_ENV;

  afterEach(() => {
    // Restaurar entorno original
    process.env.NODE_ENV = originalEnv;
    // Limpiar variables de entorno de test
    delete process.env.PORT;
    delete process.env.HOST;
    delete process.env.DEBUG;
  });

  it('debe usar development como entorno por defecto', async () => {
    delete process.env.NODE_ENV;
    const { config } = await import('../../src/config/env.js');
    expect(config.nodeEnv).toBe('development');
    expect(config.isDevelopment).toBe(true);
  });

  it('debe cargar configuración correctamente', async () => {
    const { config } = await import('../../src/config/env.js');
    // Verificar que tiene un entorno válido
    expect(['development', 'production', 'test', 'staging']).toContain(config.nodeEnv);
  });

  it('debe tener propiedades básicas definidas', async () => {
    const { config } = await import('../../src/config/env.js');
    expect(config).toHaveProperty('nodeEnv');
    expect(config).toHaveProperty('host');
    expect(config).toHaveProperty('port');
    expect(config).toHaveProperty('debug');
    expect(config).toHaveProperty('isDevelopment');
    expect(config).toHaveProperty('isProduction');
    expect(config).toHaveProperty('isTest');
  });

  it('debe tener valores válidos para host y port', async () => {
    const { config } = await import('../../src/config/env.js');
    expect(typeof config.host).toBe('string');
    expect(config.host.length).toBeGreaterThan(0);
    expect(typeof config.port).toBe('number');
    expect(config.port).toBeGreaterThan(0);
    expect(config.port).toBeLessThan(65536);
  });

  it('debe tener solo un flag de entorno en true', async () => {
    const { config } = await import('../../src/config/env.js');
    const flags = [config.isDevelopment, config.isProduction, config.isTest, config.isStaging];
    const trueCount = flags.filter(Boolean).length;
    expect(trueCount).toBe(1);
  });
});
