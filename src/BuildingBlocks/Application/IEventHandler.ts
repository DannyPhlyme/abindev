import { IDomainEvent } from '../Domain/IDomainEvent';

export interface IEventHandler<IEvent extends IDomainEvent> {
  handle(event: IEvent): Promise<void>;
}
