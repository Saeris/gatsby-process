import { Handler, Context, APIGatewayEvent } from "aws-lambda";
import { parseBody, createTransporter, sendMessage } from "./email";

interface RequestBody {
  from: string;
  subject?: string;
  message?: string;
}

export const handler: Handler = async (event: APIGatewayEvent, context: Context) => {
  try {
    const { awsRequestId: requestId } = context || { awsRequestId: `` };

    const { from, subject = `[No subject]`, message = `[No message]` } = parseBody<RequestBody>({
      body: event?.body || ``,
      requestId
    });

    const transporter = createTransporter(requestId);

    return await sendMessage({ transporter, from, subject, message, requestId });
  } catch (error) {
    return {
      statusCode: error.httpStatus,
      body: `${error.errorType}: ${error.errorMessage}`
    };
  }
};
