import { IDomainEvent } from './IDomainEvent';

export abstract class Entity {
  private domainEvents: Array<IDomainEvent>;

  constructor() {
    this.domainEvents ??= [];
  }

  getDomainEvents(): ReadonlyArray<IDomainEvent> {
    return this.domainEvents.slice();
  }

  clearDomainEvents(): void {
    this.domainEvents = this.domainEvents.splice(0, this.domainEvents.length);
  }

  protected addDomainEvent(domainEvent: IDomainEvent) {
    this.domainEvents ??= [];

    this.domainEvents.push(domainEvent);
  }

  abstract toPrimitives(): any;
}
