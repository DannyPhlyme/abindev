import { Book } from '@Modules/Book/Domain/Book';
import { IQueryWithResult } from '../Contracts/IQuery';

export class RetrieveBookDetailQuery extends IQueryWithResult<Book> {
  constructor(readonly bookId: string) {
    super();
  }
}
