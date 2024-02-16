import { UpdateFeedService } from '../src/modules/feed/services/UpdateFeedService'
import { CacheRepositoryTest, FeedRepositoryTest, feedData } from './factory'

describe('UpdateFeedService.spec', () => {
  const feedRepository = new FeedRepositoryTest()
  const cacheRepository = new CacheRepositoryTest()

  const updateFeedService = new UpdateFeedService(
    feedRepository,
    cacheRepository
  )

  test('Should call feed repository', async () => {
    const feedRepositorySpy = jest.spyOn(feedRepository, 'getByStatus')

    await updateFeedService.update()

    expect(feedRepositorySpy).toHaveBeenCalledWith('published')
  })

  test('Should call cache repository', async () => {
    const cacheRepositorySpy = jest.spyOn(cacheRepository, 'update')

    await updateFeedService.update()

    expect(cacheRepositorySpy).toHaveBeenCalledWith([feedData])
  })
})
