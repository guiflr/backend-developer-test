import { UpdateJobService } from '../src/modules/jobs/services/UpdateJobService'
import { JobRepositoryTest, UUIDValidatorTest, UpdateJobValidatorTest, updateJobData } from './factory'
import { invalidRequest } from '../src/shared/errors/invalidRequest'

describe('UpdateJobData', () => {
  const updateValidator = new UpdateJobValidatorTest()
  const uuidValidator = new UUIDValidatorTest()
  const jobRepository = new JobRepositoryTest()

  const updateJob = new UpdateJobService(updateValidator, uuidValidator, jobRepository)

  test('Should call update job validator', async () => {
    const updateValidatorSpy = jest.spyOn(updateValidator, 'validate')

    await updateJob.update(updateJobData, 'id')
    expect(updateValidatorSpy).toHaveBeenCalledWith(updateJobData)
  })

  test('Should throw an error if update data is invalid', async () => {
    const error = 'fail'
    jest.spyOn(updateValidator, 'validate').mockReturnValueOnce({ error, isValid: false })

    await expect(() => updateJob.update(updateJobData, 'id')).rejects.toEqual(invalidRequest(error))
  })

  test('Should call update job validator', async () => {
    const uuidValidatorSpy = jest.spyOn(uuidValidator, 'validate')

    await updateJob.update(updateJobData, 'id')
    expect(uuidValidatorSpy).toHaveBeenCalledWith('id')
  })

  test('Should throw an error if update data is invalid', async () => {
    const error = 'fail'
    jest.spyOn(uuidValidator, 'validate').mockReturnValueOnce({ error, isValid: false })

    await expect(() => updateJob.update(updateJobData, 'id')).rejects.toEqual(invalidRequest('invalid job id'))
  })

  test('Should call job repository with correct values', async () => {
    const jobRepoSpy = jest.spyOn(jobRepository, 'update')

    await updateJob.update(updateJobData, 'id')
    expect(jobRepoSpy).toHaveBeenCalledWith(updateJobData, 'id')
  })

})
