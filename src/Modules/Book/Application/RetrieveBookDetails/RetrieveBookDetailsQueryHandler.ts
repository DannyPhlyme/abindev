import { ResourceNotFoundError } from '@BuildingBlocks/Application/ResourceNotFoundError';
import { Uuid } from '@BuildingBlocks/Domain/Uuid';
import { Book } from '@Modules/Book/Domain/Book';
import { BookId } from '@Modules/Book/Domain/BookId';
import { IBookRepository } from '@Modules/Book/Domain/IBookRepository';
import { Inject } from '@nestjs/common';
import { RequestHandler } from 'nestjs-mediator';
import { IQueryHandler } from '../Configuration/Queries/IQueryHandler';
import { RetrieveBookDetailQuery } from './RetrieveBookDetailQuery';

@RequestHandler(RetrieveBookDetailQuery)
export class RetrieveBookDetailsQueryHandler implements IQueryHandler<RetrieveBookDetailQuery, Book> {
  constructor(
    @Inject('BookRepository')
    private readonly bookRepository: IBookRepository,
  ) {}

  async handle(query: RetrieveBookDetailQuery): Promise<Book> {
    try {
      const uid = new Uuid(query.bookId);
      const book = await this.bookRepository.findBookById(new BookId(uid));

      if (!book) {
        throw new ResourceNotFoundError('The book you are attempting to retrieve does not exist in the collection.');
      }
      return book;
    } catch (error) {
      throw error;
    }
  }
}
