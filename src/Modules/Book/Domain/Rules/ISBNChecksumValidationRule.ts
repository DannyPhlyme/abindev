import { IBusinessRule } from '@BuildingBlocks/Domain/IBusinessRule';
import { BookISBN } from '../BookISBN';

export class ISBNChecksumValidationRule implements IBusinessRule {
  constructor(private readonly isbn: string) {}

  isBroken(): boolean {
    return BookISBN.CheckSum(this.isbn);
  }

  message = 'Invalid checksum for ISBN.';
}
