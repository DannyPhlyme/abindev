import { TypedIdValueBase } from '@BuildingBlocks/Domain/TypedIdValueBase';
import { Uuid } from '@BuildingBlocks/Domain/Uuid';

export class BookId extends TypedIdValueBase {
  constructor(value: Uuid) {
    super(value);
  }
}
