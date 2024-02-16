import { S3Connection } from '../../../config/cache/S3Connection'
import { FeedData } from '../domain/types'
import { S3CacheRepository } from '../infra/cache/S3CacheRepository'
import { FeedService } from '../services/FeedService'

export async function makeGetFeed (): Promise<FeedData[]> {
  const cacheRepository = new S3CacheRepository(S3Connection.connect())

  const feedService = new FeedService(cacheRepository)

  const feed = await feedService.get()

  return feed
}
