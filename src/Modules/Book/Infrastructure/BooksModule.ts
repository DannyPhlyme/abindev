import { Module } from '@nestjs/common';
import { DataAccessModule } from './Configuration/DataAccess/DataAccessModule';
import { DomainModule } from './Configuration/Domain/DomainModule';
import { ProcessingModule } from './Configuration/Processing/ProcessingModule';
import { MediatorModule } from './Configuration/Mediation/MediatorModule'
import { AddBookCommandHandler } from '../Application/AddBook/AddBookCommandHandler';
import { BooksController } from '@API/Modules/Book/BooksController';

@Module({
  imports: [DomainModule, DataAccessModule, ProcessingModule, MediatorModule],
  controllers: [BooksController],
  providers: [AddBookCommandHandler],
})
export class BooksModule {}
