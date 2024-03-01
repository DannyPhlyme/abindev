import { IBusinessRule } from '@BuildingBlocks/Domain/IBusinessRule';

export class ISBNMustBeExactly10DigitsRule implements IBusinessRule {
  constructor(private readonly isbn: string) {}

  isBroken(): boolean {
    return this.isbn.length != 10;
  }

  message = 'ISBN must be exactly 10 digits. We only support ISBN-10, e.g, (ISBN-965-448-765-9).';
}
