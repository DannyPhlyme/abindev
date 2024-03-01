import { IBusinessRule } from '@BuildingBlocks/Domain/IBusinessRule';

export class ISBNLastDigitMustBeADigitOrXRule implements IBusinessRule {
  constructor(private readonly isbn: string) {}

  isBroken(): boolean {
    const lastDigit = this.isbn[9].toUpperCase();

    if (!/[\dX]/.test(lastDigit)) {
      return false;
    }
  }

  message = 'ISBN last digit must be a digit or "X". (965-448-765-12) ❌ (012-345-123-7) ✅.';
}
