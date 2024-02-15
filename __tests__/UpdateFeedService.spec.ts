import { UpdateFeedService } from '../src/modules/feed/services/UpdateFeedService'
import { CacheRepositoryTest, FeedRepositoryTest, feedData } from './factory'

describe('UpdateCachePublishedJobsService', () => {
  const feedRepository = new FeedRepositoryTest()
  const cacheRepository = new CacheRepositoryTest()

  const updateFeedService = new UpdateFeedService(
    feedRepository,
    cacheRepository
  )

  test('Should call job repository', async () => {
    const jobRepositorySpy = jest.spyOn(feedRepository, 'getByStatus')

    await updateFeedService.update()

    expect(jobRepositorySpy).toHaveBeenCalledWith('published')
  })

  test('Should call job repository', async () => {
    const cacheRepositorySpy = jest.spyOn(cacheRepository, 'update')

    await updateFeedService.update()

    expect(cacheRepositorySpy).toHaveBeenCalledWith(feedData)
  })
})
