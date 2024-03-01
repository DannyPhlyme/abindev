import { ICommandWithResult } from '../Contracts/ICommand';

export class AddBookCommand extends ICommandWithResult<string> {
  constructor(
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
