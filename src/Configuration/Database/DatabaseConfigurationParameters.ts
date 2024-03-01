export interface DatabaseConfigurationParameters {
  uri?: string;
  url?: string;
  host?: string;
  username?: string;
  password?: string;
  port?: string;
  database?: string;
  dialect?: string;
  timezone?: string;
  autoLoadModels?: boolean;
  synchronize?: boolean;
  ssl?: boolean;
  dialectOptions?: {
    ssl: {
      require: boolean;
      rejectUnauthorized: boolean;
    };
  };
}
