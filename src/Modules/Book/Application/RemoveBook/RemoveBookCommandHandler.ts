import { ServiceValidationError } from '@BuildingBlocks/Application/ServiceValidationError';
import { Uuid } from '@BuildingBlocks/Domain/Uuid';
import { IUnitOfWork } from '@BuildingBlocks/Infrastructure/IUnitOfWork';
import { BookId } from '@Modules/Book/Domain/BookId';
import { IBookRepository } from '@Modules/Book/Domain/IBookRepository';
import { Inject, Logger } from '@nestjs/common';
import { RequestHandler } from 'nestjs-mediator';
import { ICommandHandler } from '../Configuration/Commands/ICommandHandler';
import { RemoveBookCommand } from './RemoveBookCommand';

@RequestHandler(RemoveBookCommand)
export class RemoveBookCommandHandler implements ICommandHandler<RemoveBookCommand> {
  constructor(
    @Inject('BookRepository')
    private readonly bookRepository: IBookRepository,

    @Inject('UnitOfWork')
    private readonly unitOfWork: IUnitOfWork,
  ) {}

  async handle(command: RemoveBookCommand): Promise<void> {
    try {
      Logger.log(`[${this.constructor.name}] Executing command ${RemoveBookCommand.name}...`);

      const uid = new Uuid(command.bookId);
      const book = await this.bookRepository.findBookById(new BookId(uid));

      if (!book) {
        throw new ServiceValidationError('To remove a book from the collection, a valid book must exist.');
      }

      this.bookRepository.removeBook(book);

      await this.unitOfWork.commit();

      Logger.log(`[${this.constructor.name}] Commmand ${RemoveBookCommand.name} successfully`);
    } catch (error) {
      Logger.log(`[${this.constructor.name}] Commmand ${RemoveBookCommand.name} processing failed`);
      throw error;
    }
  }
}
