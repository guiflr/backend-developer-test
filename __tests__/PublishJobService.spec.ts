import { PublishJobService } from '../src/modules/jobs/services/PublishJobService'
import { JobQueueTest, JobRepositoryTest, jobData } from './factory'
import { notFound } from '../src/shared/errors/notFound'

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

  test('Should throws an error when job not founded job queue with correct values', async () => {
    jest.spyOn(jobRepo, 'get').mockResolvedValueOnce(null as any)

    const jobQueueSpy = jest.spyOn(jobQueue, 'store')

    await expect(() => publiJob.publish('id')).rejects.toEqual(notFound("job not founded"))
  })
})
