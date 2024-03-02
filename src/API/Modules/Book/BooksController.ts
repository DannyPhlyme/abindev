import { AddBookCommand } from '@Modules/Book/Application/AddBook/AddBookCommand';
import { RetrieveBookDetailQuery } from '@Modules/Book/Application/RetrieveBookDetails/RetrieveBookDetailQuery';
import { RetrieveBooksQuery } from '@Modules/Book/Application/RetrieveBooks/RetrieveBooksQuery';
import { UpdateBookDetailsCommand } from '@Modules/Book/Application/UpdateBookDetails/UpdateBookDetailsCommand';
import { Book } from '@Modules/Book/Domain/Book';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Mediator } from 'nestjs-mediator';
import { AddBookRequest } from './AddBookRequest';
import { BookResponse } from './BookResponse';
import { UpdateBookDetailsRequest } from './UpdateBookDetailsRequest';

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

  @Get(':id')
  async retrieveBookDetails(@Param('id') bookId: string) {
    const query = new RetrieveBookDetailQuery(bookId);

    const result = await this.mediator.send(query);

    return this.toDto(result);
  }

  @Put(':id')
  async updateBookDetails(@Param('id') bookId: string, @Body() request: UpdateBookDetailsRequest) {
    const command = new UpdateBookDetailsCommand(
      bookId,
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
