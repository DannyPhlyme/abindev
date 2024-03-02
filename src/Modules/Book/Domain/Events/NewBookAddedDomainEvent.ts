import { DomainEventBase } from '@BuildingBlocks/Domain/DomainEventBase';
import { BookISBN } from '../BookISBN';
import { BookId } from '../BookId';

type NewBookAddedDomainEventAttributes = {
  readonly id: BookId;
  readonly title: string;
  readonly author: string;
  readonly isbn: BookISBN;
  readonly description: string;
  readonly publisher: string;
  readonly publishedDate: Date;
  readonly pageCount: number;
};

export class NewBookAddedDomainEvent extends DomainEventBase {
  static readonly EVENT_NAME = NewBookAddedDomainEvent.name;

  constructor(
    readonly id: BookId,
    readonly title: string,
    readonly author: string,
    readonly isbn: BookISBN,
    readonly description: string,
    readonly publisher: string,
    readonly publishedDate: Date,
    readonly pageCount: number,
  ) {
    super({
      entityId: id.value,
      eventName: NewBookAddedDomainEvent.EVENT_NAME,
    });
  }

  toPrimitives(): NewBookAddedDomainEventAttributes {
    const { id, title, author, isbn, description, publisher, publishedDate, pageCount } = this;

    return {
      id,
      title,
      author,
      isbn,
      description,
      publisher,
      publishedDate,
      pageCount,
    };
  }
}
