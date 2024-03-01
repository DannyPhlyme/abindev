import { Entity } from '../../Domain/Entity';

export interface IDomainEventsDispatcher {
  dispatchDomainEvents(entity: Entity): void;
}
