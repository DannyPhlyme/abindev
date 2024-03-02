import { BooksController } from '@API/Modules/Book/BooksController';
import { Module } from '@nestjs/common';
import { AddBookCommandHandler } from '../Application/AddBook/AddBookCommandHandler';
import { RetrieveBookDetailsQueryHandler } from '../Application/RetrieveBookDetails/RetrieveBookDetailsQueryHandler';
import { RetrieveBooksQueryHandler } from '../Application/RetrieveBooks/RetrieveBooksQueryHandler';
import { UpdateBookDetailsCommandHandler } from '../Application/UpdateBookDetails/UpdateBookDetailsCommandHandler';
import { DataAccessModule } from './Configuration/DataAccess/DataAccessModule';
import { DomainModule } from './Configuration/Domain/DomainModule';
import { MediatorModule } from './Configuration/Mediation/MediatorModule';
import { ProcessingModule } from './Configuration/Processing/ProcessingModule';

@Module({
  imports: [DomainModule, DataAccessModule, ProcessingModule, MediatorModule],
  controllers: [BooksController],
  providers: [
    AddBookCommandHandler,
    RetrieveBooksQueryHandler,
    RetrieveBookDetailsQueryHandler,
    UpdateBookDetailsCommandHandler,
  ],
})
export class BooksModule {}
