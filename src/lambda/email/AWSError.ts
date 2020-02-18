import { Context } from "aws-lambda";

export abstract class AWSError extends Error {
  public httpStatus: number | undefined;
  public errorType: string | undefined;
  public errorMessage: string | undefined;
  public requestId: Context["awsRequestId"];

  get name(): string {
    return this.errorType || this.constructor.name;
  }

  get message(): string {
    return this.errorMessage || ``;
  }

  constructor(requestId: Context["awsRequestId"]) {
    super();
    this.requestId = requestId;
  }
}
