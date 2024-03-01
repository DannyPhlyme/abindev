import { Platform, Type } from '@mikro-orm/core';
import { TypedIdValueBase } from '../Domain/TypedIdValueBase';
import { Uuid } from '../Domain/Uuid';

export class TypedIdValueBaseCustomType extends Type<TypedIdValueBase, string> {
  getColumnType(): string {
    return 'uuid';
  }

  // Convert TypedIdValueBase to a string for database storage
  convertToDatabaseValue(value: TypedIdValueBase): string {
    return value.value;
  }

  // Convert string from the database to TypedIdValueBase
  convertToJSValue(value: string): TypedIdValueBase {
    return new TypedIdValueBase(new Uuid(value));
  }

  // Optional: Modify SQL expression for converting to JS value
  convertToJSValueSQL(key: string, platform: Platform): string {
    return `CAST(${key} AS UUID)`; // Example for PostgreSQL
  }
}
