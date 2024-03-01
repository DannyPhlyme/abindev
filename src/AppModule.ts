import { UnitOfWorkRequestContextMiddleware } from '@API/Configuration/ExecutionContext/UnitOfWorkRequestContextMiddleware';
import { BooksModule } from '@Modules/Book/Infrastructure/BooksModule';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [BooksModule, EventEmitterModule.forRoot(), MikroOrmModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UnitOfWorkRequestContextMiddleware).forRoutes('*');
  }
}
