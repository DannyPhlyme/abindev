import { Book } from './Book';
import { BookISBN } from './BookISBN';
import { BookId } from './BookId';

export interface IBookRepository {
  saveBook(book: Book): void;
  findBookById(id: BookId): Promise<Book>;
  findBooks(): Promise<Array<Book>>;
  countBooks(isbn: BookISBN): Promise<number>;
}
