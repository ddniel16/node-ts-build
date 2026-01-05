import { describe, it, expect } from 'vitest';
import { Tools } from '../src/tools.js';

describe('Tools', () => {
  describe('info', () => {
    it('debe retornar mensaje informativo con prefijo', () => {
      const resultado = Tools.info('Información importante');
      expect(resultado).toContain('Info:');
      expect(resultado).toContain('Información importante');
    });

    it('debe retornar un string válido', () => {
      const resultado = Tools.info('Test');
      expect(typeof resultado).toBe('string');
      expect(resultado).toContain('Info:');
    });
  });

  describe('success', () => {
    it('debe incluir el símbolo de éxito', () => {
      const resultado = Tools.success('Test');
      expect(resultado).toContain('✓');
      expect(resultado).toContain('Test');
    });
  });

  describe('warning', () => {
    it('debe incluir el símbolo de advertencia', () => {
      const resultado = Tools.warning('Test');
      expect(resultado).toContain('⚠');
      expect(resultado).toContain('Test');
    });
  });

  describe('integración de métodos', () => {
    it('todos los métodos deben retornar strings no vacíos', () => {
      expect(Tools.greet('Test')).toBeTruthy();
      expect(Tools.error('Test')).toBeTruthy();
      expect(Tools.info('Test')).toBeTruthy();
      expect(Tools.success('Test')).toBeTruthy();
      expect(Tools.warning('Test')).toBeTruthy();
    });

    it('debe manejar strings vacíos correctamente', () => {
      expect(Tools.greet('')).toContain('Hola');
      expect(Tools.error('')).toContain('Error:');
      expect(Tools.info('')).toContain('Info:');
      expect(Tools.success('')).toContain('✓');
      expect(Tools.warning('')).toContain('⚠');
    });
  });
});
