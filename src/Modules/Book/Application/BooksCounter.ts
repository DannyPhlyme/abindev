import { Inject } from '@nestjs/common';
import { IBooksCounter } from '../../Book/Domain/IBooksCounter';
import { BookISBN } from '../Domain/BookISBN';
import { IBookRepository } from '../Domain/IBookRepository';

export class BooksCounter implements IBooksCounter {
  constructor(
    @Inject('BookRepository')
    private readonly bookRepository: IBookRepository,
  ) {}

  async countBooksWithISBN(isbn: BookISBN): Promise<number> {
    const count = await this.bookRepository.countBooks(isbn);
    return count;
  }
}
