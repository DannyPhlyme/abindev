export class Env {
  static get(key: string, defaultValue: any = '') {
    const val = process.env[key] || defaultValue;

    if (val === undefined) {
      throw new Error('The specified env variable does not exist!');
    }

    return val;
  }
}
