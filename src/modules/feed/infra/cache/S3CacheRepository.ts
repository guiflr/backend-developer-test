import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand
} from '@aws-sdk/client-s3'
import { FeedData } from '../../domain/types'
import { CacheRepository } from '../../repositories/CacheRepository'

export class S3CacheRepository implements CacheRepository {
  constructor (private s3Client: S3Client) {}

  async get (): Promise<FeedData[]> {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: process.env.AWS_BUCKET_KEY
    })

    const data = await this.s3Client.send(command)

    const feedText = await data.Body?.transformToString()

    if (feedText) {
      const feed = JSON.parse(feedText)

      return feed
    }

    return []
  }
  async update (data: FeedData[]): Promise<void> {
    const body = JSON.stringify(data)
    const command = new PutObjectCommand({
      Bucket: 'feed-content-serve',
      Key: 'feed.json',
      Body: body
    })

    await this.s3Client.send(command)
  }
}
