import { ServiceValidationError } from '@BuildingBlocks/Application/ServiceValidationError';
import { Uuid } from '@BuildingBlocks/Domain/Uuid';
import { IUnitOfWork } from '@BuildingBlocks/Infrastructure/IUnitOfWork';
import { BookISBN } from '@Modules/Book/Domain/BookISBN';
import { BookId } from '@Modules/Book/Domain/BookId';
import { IBookRepository } from '@Modules/Book/Domain/IBookRepository';
import { Inject, Logger } from '@nestjs/common';
import { RequestHandler } from 'nestjs-mediator';
import { ICommandHandler } from '../Configuration/Commands/ICommandHandler';
import { UpdateBookDetailsCommand } from './UpdateBookDetailsCommand';

@RequestHandler(UpdateBookDetailsCommand)
export class UpdateBookDetailsCommandHandler implements ICommandHandler<UpdateBookDetailsCommand> {
  constructor(
    @Inject('BookRepository')
    private readonly bookRepository: IBookRepository,

    @Inject('UnitOfWork')
    private readonly unitOfWork: IUnitOfWork,
  ) {}

  async handle(command: UpdateBookDetailsCommand): Promise<void> {
    try {
      Logger.log(`[${this.constructor.name}] Executing command ${UpdateBookDetailsCommand.name}...`);

      const uid = new Uuid(command.bookId);
      const book = await this.bookRepository.findBookById(new BookId(uid));

      if (!book) {
        throw new ServiceValidationError(
          'To update the details of a book, a valid book must exist.',
        );
      }

      book.updateBookDetails(
        command.title,
        command.author,
        BookISBN.Create(command.isbn),
        command.description,
        command.publisher,
        command.publishedDate,
        command.pageCount,
      );

      await this.unitOfWork.commit(book);

      Logger.log(`[${this.constructor.name}] Commmand ${UpdateBookDetailsCommand.name} successfully`);
    } catch (error) {
      Logger.log(`[${this.constructor.name}] Commmand ${UpdateBookDetailsCommand.name} processing failed`);
      throw error;
    }
  }
}
