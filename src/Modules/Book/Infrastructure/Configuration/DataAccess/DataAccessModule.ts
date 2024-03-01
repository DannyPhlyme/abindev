import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { BookEntitySchema } from '../../Domain/Book/BookEntitySchema';
import { BookRepository } from '../../Domain/Book/BookRepository';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [BookEntitySchema],
    }),
  ],
  providers: [
    {
      provide: 'BookRepository',
      useClass: BookRepository,
    },
  ],
  exports: ['BookRepository'],
})
export class DataAccessModule {}
