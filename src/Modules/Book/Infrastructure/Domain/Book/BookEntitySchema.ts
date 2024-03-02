import { TypedIdValueBaseCustomType } from '@BuildingBlocks/Infrastructure/TypedIdValueBaseCustomType';
import { EntitySchema } from '@mikro-orm/core';
import { Book } from '@Modules/Book/Domain/Book';
import { BookISBN } from '@Modules/Book/Domain/BookISBN';

export const BookEntitySchema = new EntitySchema<Book>({
  class: Book,
  tableName: 'Books',
  properties: {
    id: {
      type: TypedIdValueBaseCustomType,
      fieldName: 'Id',
      primary: true,
    },
    title: { type: 'string', fieldName: 'Title' },
    author: { type: 'string', fieldName: 'Author' },
    isbn: {
      kind: 'embedded',
      entity: () => BookISBNEntitySchema,
      prefix: false,
    },
    description: { type: 'text', fieldName: 'Description' },
    publisher: { type: 'string', fieldName: 'Publisher' },
    publishedDate: {
      type: 'datetime',
      fieldName: 'PublishedDate',
    },
    pageCount: { type: 'smallint', fieldName: 'PageCount' },
  },
});

export const BookISBNEntitySchema = new EntitySchema<BookISBN>({
  class: BookISBN,
  embeddable: true,
  properties: {
    value: { type: 'string', fieldName: 'ISBN', unique: true },
  },
});
