import { Request } from 'nestjs-mediator';

export interface IQuery<TResult> extends Request<TResult> {}
