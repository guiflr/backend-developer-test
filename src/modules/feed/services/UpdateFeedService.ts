import { UpdateFeed } from '../domain/UpdateFeed'
import { CacheRepository } from '../repositories/CacheRepository'
import { FeedRepository } from '../repositories/FeedRepository'

export class UpdateFeedService implements UpdateFeed {
  constructor (
    private feedRepository: FeedRepository,
    private cacheRepository: CacheRepository
  ) {}
  async update (): Promise<void> {
    const jobs = await this.feedRepository.getByStatus('published')

    await this.cacheRepository.update(jobs)
  }
}
