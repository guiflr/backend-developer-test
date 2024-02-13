import { SendMessageCommand, SQSClient } from '@aws-sdk/client-sqs'

class SQSConnection {
  static connect (): SQSClient {
    return new SQSClient({region: process.env.AWS_REGION})
  }
}

export { SQSConnection }
