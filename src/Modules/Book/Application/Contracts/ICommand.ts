import { Request } from 'nestjs-mediator';

export abstract class ICommandWithResult<TResult> extends Request<TResult> {}

export abstract class ICommand extends Request {}
