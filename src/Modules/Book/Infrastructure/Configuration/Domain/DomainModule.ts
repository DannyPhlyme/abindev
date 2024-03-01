import { BooksCounter } from '@Modules/Book/Application/BooksCounter';
import { Module } from '@nestjs/common';
import { DataAccessModule } from '../DataAccess/DataAccessModule';

@Module({
  imports: [DataAccessModule],
  providers: [
    {
      provide: 'BooksCounter',
      useClass: BooksCounter,
    },
  ],
  exports: ['BooksCounter'],
})
export class DomainModule {}
