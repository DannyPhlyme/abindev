import { DomainEventBase } from '@BuildingBlocks/Domain/DomainEventBase';
import { BookISBN } from '../BookISBN';
import { BookId } from '../BookId';

type BookDetailsUpdatedDomainEventAttributes = {
  id: BookId;
  title: string;
  author: string;
  isbn: BookISBN;
};

export class BookDetailsUpdatedDomainEvent extends DomainEventBase {
  static readonly EVENT_NAME = BookDetailsUpdatedDomainEvent.name;

  constructor(
    readonly id: BookId,
    readonly title: string,
    readonly author: string,
    readonly isbn: BookISBN,
  ) {
    super({
      entityId: id.value,
      eventName: BookDetailsUpdatedDomainEvent.EVENT_NAME,
    });
  }

  toPrimitives(): BookDetailsUpdatedDomainEventAttributes {
    const { id, title, author, isbn } = this;

    return {
      id,
      title,
      author,
      isbn,
    };
  }
}
