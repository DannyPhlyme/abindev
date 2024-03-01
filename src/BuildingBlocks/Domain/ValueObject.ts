import { isEqual } from 'lodash';

export abstract class ValueObject<T extends ValueObject<T>> {
  abstract getEqualityComponents(): any[];

  equals(vo: T): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }

    if (vo.constructor !== this.constructor) {
      return false;
    }

    return isEqual(this.getEqualityComponents(), vo.getEqualityComponents());
  }
}
