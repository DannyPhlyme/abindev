import { ICommand } from '../Contracts/ICommand';

export class UpdateBookDetailsCommand extends ICommand {
  constructor(
    readonly bookId: string,
    readonly title: string,
    readonly author: string,
    readonly isbn: string,
    readonly description: string,
    readonly publisher: string,
    readonly publishedDate: Date,
    readonly pageCount: number,
  ) {
    super();
  }
}
