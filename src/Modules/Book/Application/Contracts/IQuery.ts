import { Request } from 'nestjs-mediator';

export abstract class IQueryWithResult<TResult> extends Request<TResult> {}

export abstract class IQuery extends Request {}
