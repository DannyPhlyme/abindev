import { Book } from '@Modules/Book/Domain/Book';
import { IBookRepository } from '@Modules/Book/Domain/IBookRepository';
import { Inject } from '@nestjs/common';
import { RequestHandler } from 'nestjs-mediator';
import { IQueryHandler } from '../Configuration/Queries/IQueryHandler';
import { RetrieveBooksQuery } from './RetrieveBooksQuery';

@RequestHandler(RetrieveBooksQuery)
export class RetrieveBooksQueryHandler implements IQueryHandler<RetrieveBooksQuery, Array<Book>> {
  constructor(
    @Inject('BookRepository')
    private readonly bookRepository: IBookRepository,
  ) {}

  async handle(request: RetrieveBooksQuery): Promise<Array<Book>> {
    try {
      return await this.bookRepository.findBooks();
    } catch (error) {
      throw error;
    }
  }
}
