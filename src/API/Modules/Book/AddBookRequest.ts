import { IsDateString, IsNumber, IsString, MinLength } from 'class-validator';

export class AddBookRequest {
  @MinLength(3, {
    message: 'Please provide a valid title',
  })
  title: string;

  @MinLength(3, {
    message: 'Please provide a valid author name',
  })
  author: string;

  @IsString({ message: 'Please provide a valid ISBN' })
  isbn: string;

  @MinLength(15, { message: 'Please provide a valid description' })
  description: string;

  @MinLength(3, {
    message: 'Please provide a valid publisher name',
  })
  publisher: string;

  @IsDateString({})
  publishedDate: Date;

  @IsNumber({}, { message: 'Please provide a valid page count' })
  pageCount: number;
}
