import { isEqual } from 'lodash';
import { Uuid } from './Uuid';

export class TypedIdValueBase extends Uuid {
  constructor(value: Uuid) {
    super(value.value);
  }

  equals(obj: object): boolean {
    return obj instanceof TypedIdValueBase && isEqual(this, obj);
  }
}
