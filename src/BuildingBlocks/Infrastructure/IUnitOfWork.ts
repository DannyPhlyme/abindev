import { Entity } from '../Domain/Entity';

export interface IUnitOfWork {
  commit(entity?: Entity): Promise<void>;
}
