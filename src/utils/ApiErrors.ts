import IErrorMsg from '../interfaces/errorMsgInterface';

class ApiErrors {
  code: number;

  message: IErrorMsg;

  constructor(code: number, message: IErrorMsg) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg: IErrorMsg): ApiErrors {
    return new ApiErrors(400, msg);
  }

  static unauthorized(msg:IErrorMsg): ApiErrors {
    return new ApiErrors(401, msg);
  }

  static notFound(msg:IErrorMsg): ApiErrors {
    return new ApiErrors(404, msg);
  }

  static unprocessableEntity(msg:IErrorMsg): ApiErrors {
    return new ApiErrors(422, msg);
  }
}

export default ApiErrors;