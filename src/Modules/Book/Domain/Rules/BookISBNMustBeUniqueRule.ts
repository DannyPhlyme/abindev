import { IBusinessRule } from '@BuildingBlocks/Domain/IBusinessRule';

export class BookISBNMustBeUniqueRule implements IBusinessRule {
  constructor(private readonly bookCount: number) {}

  isBroken(): boolean {
    return this.bookCount > 0;
  }

  message = 'Book ISBN must be unique.';
}
