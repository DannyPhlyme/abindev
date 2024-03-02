import { HttpException, HttpStatus } from '@nestjs/common';

export class ResourceNotFoundError extends HttpException {
  constructor(readonly message: string) {
    const errorResponse = {
      cause: {
        title: 'Resource not found error',
        message: 'A resource not found error has occurred, please review the description to fix',
      },
      description: `${message}`,
      stautusCode: HttpStatus.NOT_FOUND,
    };

    super(errorResponse, HttpStatus.NOT_FOUND);
  }
}
