import { PublishJobService } from '../src/modules/jobs/services/PublishJobService'
import { JobQueueTest, JobRepositoryTest, jobData } from './factory'

describe('PublishJobService', () => {
  const jobRepo = new JobRepositoryTest()
  const jobQueue = new JobQueueTest()

  const publiJob = new PublishJobService(jobRepo, jobQueue)

  test('Should call job repository', async () => {
    const jobRepoSpy = jest.spyOn(jobRepo, 'get')

    await publiJob.publish('id')

    expect(jobRepoSpy).toHaveBeenCalledWith('id')
  })

  test('Should call job queue with correct values', async () => {
    const jobQueueSpy = jest.spyOn(jobQueue, 'store')

    await publiJob.publish('id')

    expect(jobQueueSpy).toHaveBeenCalledWith({ id: 'id', ...jobData })
  })
})
