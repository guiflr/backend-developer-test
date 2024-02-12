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

  test('Should throw an error when data is invalid', async () => {
    const error = 'has-error'
    jest
      .spyOn(jobValidator, 'validate')
      .mockReturnValueOnce({ error, isValid: false })

    await expect(() => createJobService.create(jobData)).rejects.toEqual({
      message: 'Invalid or missing param',
      error,
      status: 400
    })
  })
})
