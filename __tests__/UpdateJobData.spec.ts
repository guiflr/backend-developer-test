import { UpdateJobService } from '../src/modules/jobs/services/UpdateJobService'
import { UUIDValidatorTest, UpdateJobValidatorTest, updateJobData } from './factory'
import { invalidRequest } from '../src/shared/errors/invalidRequest'

describe('UpdateJobData', () => {
  const updateValidator = new UpdateJobValidatorTest()
  const uuidValidator = new UUIDValidatorTest()

  const updateJob = new UpdateJobService(updateValidator, uuidValidator)

  test('Should call update job validator', async () => {
    const updateValidatorSpy = jest.spyOn(updateValidator, 'validator')

    await updateJob.update(updateJobData, 'id')
    expect(updateValidatorSpy).toHaveBeenCalledWith(updateJobData)
  })

  test('Should throw an error if update data is invalid', async () => {
    const error = 'fail'
    jest.spyOn(updateValidator, 'validator').mockReturnValueOnce({ error, isValid: false })

    await expect(() => updateJob.update(updateJobData, 'id')).rejects.toEqual(invalidRequest(error))
  })

  test('Should call update job validator', async () => {
    const uuidValidatorSpy = jest.spyOn(uuidValidator, 'validate')

    await updateJob.update(updateJobData, 'id')
    expect(uuidValidatorSpy).toHaveBeenCalledWith('id')
  })

})
