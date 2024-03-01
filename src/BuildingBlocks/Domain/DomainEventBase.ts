import { IDomainEvent } from './IDomainEvent';
import { Uuid } from './Uuid';

export abstract class DomainEventBase implements IDomainEvent {
  readonly entityId: string;
  readonly eventId?: string;
  readonly occurredOn?: Date;
  readonly eventName: string;

  static EVENT_NAME: string;

  constructor(event: IDomainEvent) {
    const { entityId, eventName, eventId, occurredOn } = event;

    this.entityId = entityId;
    this.eventId = eventId || Uuid.random().value;
    this.occurredOn = occurredOn || new Date();
    this.eventName = eventName;
  }

  abstract toPrimitives(): DomainEventAttributes;
}

type DomainEventAttributes = any;
