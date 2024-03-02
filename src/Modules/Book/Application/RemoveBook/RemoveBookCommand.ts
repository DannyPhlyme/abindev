import { ICommand } from '../Contracts/ICommand';

export class RemoveBookCommand extends ICommand {
  constructor(readonly bookId: string) {
    super();
  }
}
