import { AppConfiguration } from '../Configuration/App/AppConfiguration';
import { DatabaseConfiguration } from '../Configuration/Database/DatabaseConfiguration';
import { Env } from './Env';

export const environment = {
  getAppConfiguration(): AppConfiguration {
    return {
      production: false,
      port: Env.get('APP_PORT', 3000),
      environment: Env.get('NODE_ENV', 'development'),
    };
  },

  getDatabaseConfiguration(): DatabaseConfiguration {
    return {
      default: Env.get('DATABASE', 'postgres'),
      postgres: {
        options: {
          dialect: 'postgres',
          uri: Env.get('POSTGRES_DATABASE_PATH'),
          url: Env.get('POSTGRES_DATABASE_PATH'),
          username: Env.get('POSTGRES_DATABASE_USERNAME'),
          password: Env.get('POSTGRES_DATABASE_PASSWORD'),
          host: Env.get('POSTGRES_DATABASE_HOST'),
          port: Env.get('POSTGRES_DATABASE_PORT'),
          database: Env.get('POSTGRES_DATABASE_NAME'),
          timezone: Env.get('TIMEZONE', 'Africa/Lagos'),
          autoLoadModels: true,
          synchronize: true,
        },
      },
    };
  },
};
