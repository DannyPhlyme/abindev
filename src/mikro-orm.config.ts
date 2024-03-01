import { Config, environment } from '@Environments/Index';
import { Migrator } from '@mikro-orm/migrations';
import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Logger } from '@nestjs/common';

const logger = new Logger('MikroORM');
const configurationOptions: Options = {
  driver: PostgreSqlDriver,
  dbName: Config.get('db')[environment].postgres.options.database,
  password: Config.get('db')[environment].postgres.options.password,
  host: Config.get('db')[environment].postgres.options.host,
  user: Config.get('db')[environment].postgres.options.username,
  entities: ['dist/**/**/Infrastructure/**/*Schema.js'],
  entitiesTs: ['src/**/**/Infrastructure/**/*Schema.ts'],
  highlighter: new SqlHighlighter(),
  debug: true,
  logger: logger.log.bind(logger),
  migrations: {
    path: 'dist/Database/Scripts/Migrations',
    pathTs: 'src/Database/Scripts/Migrations',
    disableForeignKeys: false,
  },
  extensions: [Migrator],
};

export default configurationOptions;