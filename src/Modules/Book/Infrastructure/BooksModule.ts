import { BooksController } from '@API/Modules/Book/BooksController';
import { Module } from '@nestjs/common';
import { AddBookCommandHandler } from '../Application/AddBook/AddBookCommandHandler';
import { RetrieveBooksQueryHandler } from '../Application/RetrieveBooks/RetrieveBooksQueryHandler';
import { DataAccessModule } from './Configuration/DataAccess/DataAccessModule';
import { DomainModule } from './Configuration/Domain/DomainModule';
import { MediatorModule } from './Configuration/Mediation/MediatorModule';
import { ProcessingModule } from './Configuration/Processing/ProcessingModule';

@Module({
  imports: [DomainModule, DataAccessModule, ProcessingModule, MediatorModule],
  controllers: [BooksController],
  providers: [AddBookCommandHandler, RetrieveBooksQueryHandler],
})
export class BooksModule {}
