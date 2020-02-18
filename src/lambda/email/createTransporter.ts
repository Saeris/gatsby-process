import nodemailer from "nodemailer";
import { Context } from "aws-lambda";
import { AWSError } from "./AWSError";

class CreateTranspoterError extends AWSError {
  httpStatus = 500;
  errorType = `Internal Server Error`;
  errorMessage = `Failed to create mail transport`;
}

export const createTransporter = (requestId: Context["awsRequestId"]) => {
  try {
    return nodemailer.createTransport({
      service: `Gmail`,
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD
      }
    });
  } catch (err) {
    throw new CreateTranspoterError(requestId);
  }
};
