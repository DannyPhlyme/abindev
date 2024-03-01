export interface IDomainEvent {
  entityId: string;
  eventId?: string;
  occurredOn?: Date;
  eventName: string;
}
