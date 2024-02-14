import { UpdateJobService } from '../src/modules/jobs/services/UpdateJobService'
import { UpdateJobValidatorTest, updateJobData } from './factory'

describe('UpdateJobData', () => {
  const updateValidator = new UpdateJobValidatorTest()

  const updateJob = new UpdateJobService(updateValidator)
  test('Should call update job validator', async () => {
    const updateValidatorSpy = jest.spyOn(updateValidator, 'validator')

    await updateJob.update(updateJobData, 'id')
    expect(updateValidatorSpy).toHaveBeenCalledWith(updateJobData)
  })
})
