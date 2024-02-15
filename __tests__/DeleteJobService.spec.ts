import { DeleteJobService } from '../src/modules/jobs/services/DeleteJobService'
import { JobRepositoryTest, UUIDValidatorTest } from './factory'
import { invalidRequest } from '../src/shared/errors/invalidRequest'

describe('DeleteJobService', () => {
  const uuidValidator = new UUIDValidatorTest()
  const jobRepository = new JobRepositoryTest()

  const deleteJob = new DeleteJobService(uuidValidator, jobRepository)

  test('Should throw an error if uuid is invalid', async () => {
    const error = 'fail'
    jest.spyOn(uuidValidator, 'validate').mockReturnValueOnce({ error, isValid: false })

    await expect(() => deleteJob.delete('id')).rejects.toEqual(invalidRequest('invalid job id'))
  })

  test('Should call job repository with correct values', async () => {
    const jobRepoSpy = jest.spyOn(jobRepository, 'delete')

    await deleteJob.delete('id')
    expect(jobRepoSpy).toHaveBeenCalledWith('id')
  })

})
