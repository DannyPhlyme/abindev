import { Book } from '@Modules/Book/Domain/Book';
import { IQueryWithResult } from '../Contracts/IQuery';

export class RetrieveBooksQuery extends IQueryWithResult<Array<Book>> {}
