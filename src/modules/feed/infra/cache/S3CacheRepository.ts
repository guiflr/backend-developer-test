import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand
} from '@aws-sdk/client-s3'
import { FeedData } from '../../domain/types'
import { CacheRepository } from '../../repositories/CacheRepository'

export class S3CacheRepository implements CacheRepository {
  constructor (private s3Client: S3Client) {}
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
