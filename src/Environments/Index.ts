import * as dotenv from 'dotenv';
dotenv.config();

import { Env } from './Env';
import { environment as developmentEnvironment } from './Environment.Dev';

export const environment = Env.get('NODE_ENV');

const db: Record<string, any> = {
  development: developmentEnvironment.getDatabaseConfiguration(),
};

const app: Record<string, any> = {
  development: developmentEnvironment.getAppConfiguration(),
};


export class Config {
  public config = { app, db };

  public static get(key: string): any {
    const instance = new Config();

    const [...keys] = key.split('.');
    //get the config module
    let config = instance.config[keys[0]];

    if (!config && keys.length > 1) {
      throw new Error('Config variable requested does not exist!');
    }

    for (let i = 1; i < keys.length; i++) {
      config = config[keys[i]];
    }

    return config;
  }
}
