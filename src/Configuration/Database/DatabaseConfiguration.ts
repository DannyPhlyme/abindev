import { DatabaseConfigurationParameters } from './DatabaseConfigurationParameters';

export interface DatabaseConfiguration {
  default: string;
  postgres?: {
    options: DatabaseConfigurationParameters;
  };
}
