import { Entity } from '@BuildingBlocks/Domain/Entity';
import { RuleChecker } from '@BuildingBlocks/Domain/RuleChecker';
import { Uuid } from '@BuildingBlocks/Domain/Uuid';
import { BookISBN } from './BookISBN';
import { BookId } from './BookId';
import { IBooksCounter } from './IBooksCounter';
import { BookISBNMustBeUniqueRule } from './Rules/BookISBNMustBeUniqueRule';

export class Book extends Entity {
  private _id: BookId;
  private _title: string;
  private _author: string;
  private _isbn: BookISBN;
  private _description: string;
  private _publisher: string;
  private _publishedDate: Date;
  private _pageCount: number;

  get id() {
    return this._id;
  }

  private set id(id: BookId) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  private set title(title: string) {
    this._title = title;
  }

  get author() {
    return this._author;
  }

  private set author(author: string) {
    this._author = author;
  }

  get isbn() {
    return this._isbn;
  }

  private set isbn(isbn: BookISBN) {
    this._isbn = isbn;
  }

  get description() {
    return this._description;
  }

  private set description(description: string) {
    this._description = description;
  }

  get publisher() {
    return this._publisher;
  }

  private set publisher(publisher: string) {
    this._publisher = publisher;
  }

  get publishedDate() {
    return this._publishedDate;
  }

  private set publishedDate(publishedDate: Date) {
    this._publishedDate = publishedDate;
  }

  get pageCount() {
    return this._pageCount;
  }

  private set pageCount(pageCount: number) {
    this._pageCount = pageCount;
  }

  public static async addBook(
    title: string,
    author: string,
    isbn: BookISBN,
    description: string,
    publisher: string,
    publishedDate: Date,
    pageCount: number,
    booksCounter: IBooksCounter,
    id?: BookId,
  ) {
    RuleChecker.CheckRule(new BookISBNMustBeUniqueRule(await booksCounter.countBooksWithISBN(isbn)));

    return new Book(title, author, isbn, description, publisher, publishedDate, pageCount, id);
  }

  private constructor(
    title: string,
    author: string,
    isbn: BookISBN,
    description: string,
    publisher: string,
    publishedDate: Date,
    pageCount: number,
    id?: BookId,
  ) {
    super();

    this.id = id ?? new BookId(Uuid.random());

    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.description = description;
    this.publisher = publisher;
    this.publishedDate = publishedDate;
    this.pageCount = pageCount;
  }

  public updateBookDetails(
    title: string,
    author: string,
    isbn: BookISBN,
    description: string,
    publisher: string,
    publishedDate: Date,
    pageCount: number,
  ) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.description = description;
    this.publisher = publisher;
    this.publishedDate = publishedDate;
    this.pageCount = pageCount;
  }

  toPrimitives() {
    return;
  }
}
