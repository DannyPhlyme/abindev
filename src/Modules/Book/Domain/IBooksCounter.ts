import { BookISBN } from './BookISBN';

export interface IBooksCounter {
  countBooksWithISBN(isbn: BookISBN): Promise<number>;
}
