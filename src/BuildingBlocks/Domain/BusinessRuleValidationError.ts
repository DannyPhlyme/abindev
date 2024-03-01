import { HttpException, HttpStatus } from '@nestjs/common';
import { ServiceError } from '../Application/ServiceError';

export class BusinessRuleValidationError extends HttpException {
  constructor(readonly ruleName: string, readonly message: string) {
    const errorResponse: ServiceError = {
      cause: {
        title: 'Business rule broken',
        name: ruleName,
        message: 'A business validation error has occurred, please review the description to fix',
      },
      description: `${message}`,
      stautusCode: HttpStatus.CONFLICT,
    };

    super(errorResponse, HttpStatus.CONFLICT);
  }
}
