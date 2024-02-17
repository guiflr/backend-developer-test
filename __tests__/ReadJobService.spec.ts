import { JobModeratorTest, JobRepositoryTest, jobData } from './factory'
import { ReadJobService } from '../src/modules/jobs/services/ReadJobService'

describe('ReadJobService', () => {
  const jobModerator = new JobModeratorTest()
  const jobRepository = new JobRepositoryTest()

  const readJobService = new ReadJobService(jobModerator, jobRepository)

  const id = 'my-id'

  test('Should call JobModerator with correct values', async () => {
    const jobModeratorSpy = jest.spyOn(jobModerator, 'moderate')

    await readJobService.read({ ...jobData, id })

    expect(jobModeratorSpy).toHaveBeenCalledWith(
      jobData.title,
      jobData.description
    )
  })

  test('Should call JobRepository with correct values when moderate return true', async () => {
    const note = 'fail'
    jest.spyOn(jobModerator, 'moderate').mockResolvedValueOnce({ isHarmful: true, note  })

    const jobRepoSpy = jest.spyOn(jobRepository, 'updateStatus')

    await readJobService.read({ ...jobData, id})

    expect(jobRepoSpy).toHaveBeenCalledWith({status: 'rejected', notes: note}, id)
  })

  test('Should call JobRepository with correct values when moderate return false', async () => {
    jest.spyOn(jobModerator, 'moderate').mockResolvedValueOnce({ isHarmful: false  })

    const jobRepoSpy = jest.spyOn(jobRepository, 'updateStatus')

    await readJobService.read({ ...jobData, id })

    expect(jobRepoSpy).toHaveBeenCalledWith({status: 'published'}, id)
  })
})
