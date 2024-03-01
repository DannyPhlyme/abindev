import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Entity } from '../../Domain/Entity';
import { IDomainEventsDispatcher } from './IDomainEventsDispatcher';

@Injectable()
export class DomainEventsDispatcher implements IDomainEventsDispatcher {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  dispatchDomainEvents(entity?: Entity): void {
    if (entity) {
      Logger.log(`[${this.constructor.name}] Dispatching domain events...`);

      const domainEvents = entity.getDomainEvents();
      entity.clearDomainEvents();

      for (const domainEvent of domainEvents) {
        Logger.log(`[${this.constructor.name}] Dispatching ${domainEvent.constructor.name}...`);

        Logger.log(
          `[${this.constructor.name}] Entity ID: ${domainEvent.entityId} Event ID: ${
            domainEvent.eventId || 'N/A'
          } Occurred On: ${domainEvent.occurredOn}`,
        );
        this.eventEmitter.emit(domainEvent.constructor.name, domainEvent);
      }
    }
  }
}
