import chalk from 'chalk';

export class Tools {
  static greet(name: string): string {
    return chalk.green(`¡Hola, ${name}!`);
  }

  static error(message: string): string {
    return chalk.red(`Error: ${message}`);
  }

  static info(message: string): string {
    return chalk.blue(`Info: ${message}`);
  }

  static success(message: string): string {
    return chalk.greenBright(`✓ ${message}`);
  }

  static warning(message: string): string {
    return chalk.yellow(`⚠ ${message}`);
  }
}
