import { IUnitOfWork } from '@BuildingBlocks/Infrastructure/IUnitOfWork';
import { Book } from '@Modules/Book/Domain/Book';
import { BookISBN } from '@Modules/Book/Domain/BookISBN';
import { IBookRepository } from '@Modules/Book/Domain/IBookRepository';
import { IBooksCounter } from '@Modules/Book/Domain/IBooksCounter';
import { Inject, Logger } from '@nestjs/common';
import { RequestHandler } from 'nestjs-mediator';
import { ICommandHandler, ICommandHandlerWithResult } from '../Configuration/Commands/ICommandHandler';
import { AddBookCommand } from './AddBookCommand';

@RequestHandler(AddBookCommand)
export class AddBookCommandHandler implements ICommandHandler<AddBookCommand> {
  constructor(
    @Inject('BooksCounter')
    private readonly booksCounter: IBooksCounter,

    @Inject('BookRepository')
    private readonly bookRepository: IBookRepository,

    @Inject('UnitOfWork')
    private readonly unitOfWork: IUnitOfWork,
  ) {}

  async handle(command: AddBookCommand): Promise<void> {
    try {
      Logger.log(`[${this.constructor.name}] Executing command ${AddBookCommand.name}...`);

      const book = await Book.addBook(
        command.title,
        command.author,
        BookISBN.Create(command.isbn),
        command.description,
        command.publisher,
        command.publishedDate,
        command.pageCount,
        this.booksCounter,
      );

      this.bookRepository.saveBook(book);
      await this.unitOfWork.commit(book);

      Logger.log(`[${this.constructor.name}] Commmand ${AddBookCommand.name} successfully`);
    } catch (error) {
      Logger.log(`[${this.constructor.name}] Commmand ${AddBookCommand.name} processing failed`);
      throw error;
    }
  }
}
