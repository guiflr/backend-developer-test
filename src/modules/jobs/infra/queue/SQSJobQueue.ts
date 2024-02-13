import { SendMessageCommand, SQSClient } from '@aws-sdk/client-sqs'
import { JobCreate } from '../../domain/types'
import { JobQueue } from '../../repositories/JobQueue'

export class SQSJobQueue implements JobQueue {
  constructor (private sqsClient: SQSClient) {}
  async store (job: JobCreate): Promise<void> {
    const command = new SendMessageCommand({
      MessageBody: JSON.stringify(job),
      QueueUrl: `${process.env.AWS_QUEUE_URL}`
    })

    await this.sqsClient.send(command)
  }
}
