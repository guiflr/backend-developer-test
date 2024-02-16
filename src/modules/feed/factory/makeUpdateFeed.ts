import { Knex } from 'knex'
import { UpdateFeedService } from '../services/UpdateFeedService'
import { KnexFeedRepository } from '../infra/database/KnexFeedRepository'
import { S3CacheRepository } from '../infra/cache/S3CacheRepository'
import { S3Client } from '@aws-sdk/client-s3'

export async function makeUpdateFeed (db: Knex, s3Client: S3Client) {
  const feedRepository = new KnexFeedRepository(db)
  const cacheRepository = new S3CacheRepository(s3Client)

  const updateFeedService = new UpdateFeedService(
    feedRepository,
    cacheRepository
  )

  await updateFeedService.update()
}
