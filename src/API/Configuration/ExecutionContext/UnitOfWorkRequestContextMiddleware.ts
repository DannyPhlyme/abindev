import { EntityManager, RequestContext } from '@mikro-orm/core';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UnitOfWorkRequestContextMiddleware implements NestMiddleware {
  constructor(private readonly em: EntityManager) {}
  use(_req: any, _res: any, next: (error?: any) => void) {
    RequestContext.create(this.em, next);
  }
}
