import { HttpException, HttpStatus } from '@nestjs/common';

export class ServiceValidationError extends HttpException {
  constructor(readonly message: string) {
    const errorResponse = {
      cause: {
        title: 'Service validaition error',
        message: 'A service validation error has occurred, please review the description to fix',
      },
      description: `${message}`,
      stautusCode: HttpStatus.BAD_REQUEST,
    };

    super(errorResponse, HttpStatus.BAD_REQUEST);
  }
}
