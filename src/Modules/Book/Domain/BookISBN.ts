import { RuleChecker } from '@BuildingBlocks/Domain/RuleChecker';
import { ValueObject } from '@BuildingBlocks/Domain/ValueObject';
import { ISBNCannotContainInvalidCharactersRule } from './Rules/ISBNCannotContainInvalidCharactersRule';
import { ISBNChecksumValidationRule } from './Rules/ISBNChecksumValidationRule';
import { ISBNLastDigitMustBeADigitOrXRule } from './Rules/ISBNLastDigitMustBeADigitOrXRule';
import { ISBNMustBeExactly10DigitsRule } from './Rules/ISBNMustBeExactly10DigitsRule';

export class BookISBN extends ValueObject<BookISBN> {
  value: string;

  public static Create(isbn: string) {
    // Remove hyphens from ISBN if present
    isbn = isbn.replace(/-/g, '');

    RuleChecker.CheckRule(new ISBNMustBeExactly10DigitsRule(isbn));

    RuleChecker.CheckRule(new ISBNLastDigitMustBeADigitOrXRule(isbn));

    RuleChecker.CheckRule(new ISBNCannotContainInvalidCharactersRule(isbn));

    RuleChecker.CheckRule(new ISBNChecksumValidationRule(isbn));

    return new BookISBN(isbn);
  }

  public static CheckSum(isbn: string) {
    let weightedSum = 0;

    for (let i = 0; i < 9; i++) {
      const digit = parseInt(isbn[i]);
      weightedSum += (i + 1) * digit;
    }

    // If the last character is 'X', treat it as 10
    const lastChar = isbn[9].toUpperCase();
    const lastDigit = lastChar === 'X' ? 10 : parseInt(lastChar);

    // Check if the weighted sum modulo 11 equals the last digit
    return weightedSum % 11 === lastDigit;
  }

  private constructor(isbn: string) {
    super();
    this.value = isbn;
  }

  getEqualityComponents(): any[] {
    return [this.value];
  }
}
