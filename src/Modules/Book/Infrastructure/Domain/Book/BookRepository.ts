import { Book } from '@Modules/Book/Domain/Book';
import { BookISBN } from '@Modules/Book/Domain/BookISBN';
import { BookId } from '@Modules/Book/Domain/BookId';
import { IBookRepository } from '@Modules/Book/Domain/IBookRepository';
import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { BookEntitySchema } from './BookEntitySchema';

@Injectable()
export class BookRepository implements IBookRepository {
  constructor(private readonly em: EntityManager) {}
  saveBook(book: Book): void {
    this.em.persist(book);
  }

  async findBookById(id: BookId): Promise<Book> {
    return await this.em.findOne(BookEntitySchema, id);
  }

  async findBooks(): Promise<Book[]> {
    return await this.em.findAll(BookEntitySchema);
  }

  async countBooks(isbn: BookISBN): Promise<number> {
    const [, count] = await this.em.findAndCount(BookEntitySchema, { isbn }, { limit: 10 });
    return count;
  }
}
