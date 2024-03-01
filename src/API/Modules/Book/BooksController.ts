import { AddBookCommand } from '@Modules/Book/Application/AddBook/AddBookCommand';
import { Body, Controller, Post } from '@nestjs/common';
import { Mediator } from 'nestjs-mediator';
import { AddBookRequest } from './AddBookRequest';

@Controller('/books')
export class BooksController {
  constructor(private mediator: Mediator) {}

  @Post()
  async addBook(@Body() request: AddBookRequest) {
    const command = new AddBookCommand(
      request.title,
      request.author,
      request.isbn,
      request.description,
      request.publisher,
      request.publishedDate,
      request.pageCount,
    );

    return await this.mediator.send(command);
  }
}
