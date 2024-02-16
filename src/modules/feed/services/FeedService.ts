import { Feed } from '../domain/Feed'
import { FeedData } from '../domain/types'
import { CacheRepository } from '../repositories/CacheRepository'

export class FeedService implements Feed {
  constructor (private cacheRepository: CacheRepository) {}
  async get (): Promise<FeedData[]> {
    const feed = await this.cacheRepository.get()

    return feed
  }
}
