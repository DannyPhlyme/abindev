interface ErrorCause {
  title: string;
  name: string;
  message?: string;
}

interface IServiceError {
  cause: ErrorCause;
  description?: string;
}

export abstract class ServiceError implements IServiceError {
  public readonly cause: ErrorCause;
  public readonly description?: string;
  public readonly stautusCode: number;

  constructor(cause: ErrorCause, status: number, description?: string) {
    this.cause = cause;
    this.description = description;
    this.stautusCode = status;
  }
}
