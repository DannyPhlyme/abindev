import { DomainEventsDispatcher } from '@BuildingBlocks/Infrastructure/DomainEventsDispatching/DomainEventsDispatcher';
import { UnitOfWork } from '@BuildingBlocks/Infrastructure/UnitOfWork';
import { Module, Scope } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: 'DomainEventsDispatcher',
      useClass: DomainEventsDispatcher,
      scope: Scope.REQUEST,
    },
    {
      provide: 'UnitOfWork',
      useClass: UnitOfWork,
      scope: Scope.REQUEST,
    },
  ],
  exports: ['DomainEventsDispatcher', 'UnitOfWork'],
})
export class ProcessingModule {}
