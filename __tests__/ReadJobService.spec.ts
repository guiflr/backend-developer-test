import { JobModeratorTest, JobRepositoryTest, jobData } from './factory'
import { ReadJobService } from '../src/modules/jobs/services/ReadJobService'

describe('ReadJobService', () => {
  const jobModerator = new JobModeratorTest()
  const jobRepository = new JobRepositoryTest()

  const readJobService = new ReadJobService(jobModerator, jobRepository)

  test('Should call JobModerator with correct values', async () => {
    const jobModeratorSpy = jest.spyOn(jobModerator, 'moderate')

    await readJobService.read({ ...jobData })

    expect(jobModeratorSpy).toHaveBeenCalledWith(
      jobData.title,
      jobData.description
    )
  })

  test('Should call JobRepository with correct values when moderate return true', async () => {
    const note = 'fail'
    jest.spyOn(jobModerator, 'moderate').mockResolvedValueOnce({ isHarmful: true, note  })

    const jobRepoSpy = jest.spyOn(jobRepository, 'store')

    await readJobService.read({ ...jobData })

    expect(jobRepoSpy).toHaveBeenCalledWith({...jobData, status: 'rejected', notes: note})
  })

  test('Should call JobRepository with correct values when moderate return false', async () => {
    jest.spyOn(jobModerator, 'moderate').mockResolvedValueOnce({ isHarmful: false  })

    const jobRepoSpy = jest.spyOn(jobRepository, 'store')

    await readJobService.read({ ...jobData })

    expect(jobRepoSpy).toHaveBeenCalledWith({...jobData, status: 'published'})
  })
})
