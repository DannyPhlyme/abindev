import { EntityManager } from '@mikro-orm/postgresql';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { Entity } from '../Domain/Entity';
import { IDomainEventsDispatcher } from './DomainEventsDispatching/IDomainEventsDispatcher';
import { IUnitOfWork } from './IUnitOfWork';

@Injectable()
export class UnitOfWork implements IUnitOfWork {
  constructor(
    private readonly em: EntityManager,

    @Inject('DomainEventsDispatcher')
    private readonly domainEventsDispatcher: IDomainEventsDispatcher,
  ) {}

  async commit(entity?: Entity): Promise<void> {
    Logger.log(`[${this.constructor.name}] Committing unit of work...`);

    this.domainEventsDispatcher.dispatchDomainEvents(entity);
    await this.em.flush();

    Logger.log(`[${this.constructor.name}] Successfully committed unit of work...`);
  }
}
