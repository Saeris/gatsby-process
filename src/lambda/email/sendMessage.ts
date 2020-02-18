import nodemailer, { Transporter } from "nodemailer";
import { Context } from "aws-lambda";
import { AWSError } from "./AWSError";

class MailerError extends AWSError {
  httpStatus = 500;
  errorType = `Internal Server Error`;
  errorMessage = `Failed to send email`;
}

interface SendMessage {
  transporter: Transporter;
  from: Transporter["options"]["from"];
  subject: Transporter["options"]["subject"];
  message: Transporter["options"]["html"];
  requestId: Context["awsRequestId"];
}

const contactAddress = `hey@yourwebsite.com`;

export const sendMessage = async ({ transporter, from, subject, message, requestId }: SendMessage) => {
  try {
    const result = await transporter.sendMail({
      from,
      to: [contactAddress],
      subject,
      html: message
    });

    console.log(`Message sent: ${result.messageId}`); // eslint-disable-line
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(result)}`); // eslint-disable-line

    return {
      statusCode: 200,
      body: `Ok`
    };
  } catch (error) {
    throw new MailerError(requestId);
  }
};
