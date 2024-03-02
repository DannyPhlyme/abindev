import { AddBookCommand } from '@Modules/Book/Application/AddBook/AddBookCommand';
import { RetrieveBooksQuery } from '@Modules/Book/Application/RetrieveBooks/RetrieveBooksQuery';
import { Book } from '@Modules/Book/Domain/Book';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Mediator } from 'nestjs-mediator';
import { AddBookRequest } from './AddBookRequest';
import { BookResponse } from './BookResponse';

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

  @Get()
  async retrieveBooks() {
    const query = new RetrieveBooksQuery();

    const result = await this.mediator.send(query);

    return result.map((book) => this.toDto(book));
  }

  private toDto(book: Book): BookResponse {
    return {
      id: book.id.value,
      title: book.title,
      author: book.author,
      isbn: book.isbn.value,
      description: book.description,
      publisher: book.publisher,
      publishedDate: book.publishedDate,
      pageCount: book.pageCount,
    };
  }
}
