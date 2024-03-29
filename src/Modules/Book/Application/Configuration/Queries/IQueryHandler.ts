import { IRequestHandler } from 'nestjs-mediator';
import { IQuery } from '../../Contracts/IQuery';

export interface IQueryHandler<TQuery extends IQuery, TResult> extends IRequestHandler<TQuery, TResult> {}
