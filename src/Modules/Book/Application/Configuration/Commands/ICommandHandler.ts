import { IRequestHandler } from 'nestjs-mediator';
import { ICommand } from '../../Contracts/ICommand';

export interface ICommandHandler<TCommand extends ICommand> extends IRequestHandler<TCommand, void> {}

export interface ICommandHandlerWithResult<TCommand extends ICommand, TResult> extends IRequestHandler<TCommand, TResult> {}
