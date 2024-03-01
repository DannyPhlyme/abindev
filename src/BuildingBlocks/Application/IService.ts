export interface IService<IRequest, IResponse = never> {
  execute(request?: IRequest): Promise<IResponse> | IResponse;
}
