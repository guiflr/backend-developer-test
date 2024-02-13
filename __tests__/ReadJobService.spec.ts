import { JobModeratorTest, jobData } from './factory'
import { ReadJobService } from '../src/modules/jobs/services/ReadJobService'

describe('ReadJobService', () => {
  const jobModerator = new JobModeratorTest()

  const readJobService = new ReadJobService(jobModerator)
  test('Should call JobModerator with correct value', async () => {
    const jobModeratorSpy = jest.spyOn(jobModerator, 'moderate')

    await readJobService.read({ ...jobData, id: 'job-id' })

    expect(jobModeratorSpy).toHaveBeenCalledWith(
      jobData.title,
      jobData.description
    )
  })
})
