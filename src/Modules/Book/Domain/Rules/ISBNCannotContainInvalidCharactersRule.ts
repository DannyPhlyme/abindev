import { IBusinessRule } from '@BuildingBlocks/Domain/IBusinessRule';

export class ISBNCannotContainInvalidCharactersRule implements IBusinessRule {
  constructor(private readonly isbn: string) {}

  isBroken(): boolean {
    for (let i = 0; i < 9; i++) {
      const digit = parseInt(this.isbn[i]);

      if (isNaN(digit)) {
        return true;
      }
    }
  }

  message = 'ISBN cannot contain invalid characters. (965-448-Y65-9) ❌ (012-345-123-X) ✅.';
}
