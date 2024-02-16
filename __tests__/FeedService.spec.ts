import { CacheRepositoryTest, feedData } from './factory'
import { FeedService } from '../src/modules/feed/services/FeedService'

describe('FeedService', () => {
  const cacheRepository = new CacheRepositoryTest()

  const updateFeedService = new FeedService(cacheRepository)

  test('Should call feed cache', async () => {
    const feedRepositorySpy = jest.spyOn(cacheRepository, 'get')

    await updateFeedService.get()

    expect(feedRepositorySpy).toHaveBeenCalled()
  })

  test('Should returns feed data', async () => {
    const data = await updateFeedService.get()

    expect(Array.isArray(data)).toBe(true)
    expect(data[0]).toEqual(feedData)
  })
})
