import { CreateJobService } from '../src/modules/jobs/services/CreateJobService'
import { JobValidatorTest, jobData } from './factory'

describe('CreateJobService', () => {
  const jobValidator = new JobValidatorTest()
  const createJobService = new CreateJobService(jobValidator)
  
  test('Should call job validator', async () => {
    const jobValidatorSpy = jest.spyOn(jobValidator, 'validate')

    await createJobService.create(jobData)

    expect(jobValidatorSpy).toHaveBeenCalledWith(jobData)
  })
})
