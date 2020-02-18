import { Context } from "aws-lambda";
import { AWSError } from "./AWSError";

class BadRequest extends AWSError {
  httpStatus = 400;
  errorType = `Bad Request`;
  errorMessage = `Request body must be valid JSON`;
}

interface ParseBody {
  body: string;
  requestId: Context["awsRequestId"];
}

export const parseBody = <T>({ body, requestId }: ParseBody): T => {
  try {
    return JSON.parse(body);
  } catch (err) {
    throw new BadRequest(requestId);
  }
};
