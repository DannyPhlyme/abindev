/* eslint-disable @typescript-eslint/ban-types */
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { ValidationError, validate } from 'class-validator';

@Injectable()
export class GlobalValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      const payloadErrors = this.flattenValidationErrors(errors);
      throw new BadRequestException(payloadErrors);
    }

    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  private flattenValidationErrors(errors: ValidationError[]): Record<string, string[]> {
    return errors.reduce((acc, error) => {
      if (error.children && error.children.length > 0) {
        const childErrors = this.flattenValidationErrors(error.children);
        Object.assign(acc, childErrors);
      } else {
        const { property } = error;
        const constraints = Object.values(error.constraints);
        acc[property] = constraints;
      }
      return acc;
    }, {});
  }
}
