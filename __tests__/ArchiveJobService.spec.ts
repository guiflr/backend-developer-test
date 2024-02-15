import { JobRepositoryTest, UUIDValidatorTest } from './factory'
import { invalidRequest } from '../src/shared/errors/invalidRequest'
import { ArchiveJobService } from '../src/modules/jobs/services/ArchiveJobService'

describe('ArchiveJobService', () => {
  const uuidValidator = new UUIDValidatorTest()
  const jobRepository = new JobRepositoryTest()

  const archiveJob = new ArchiveJobService(uuidValidator, jobRepository)

  test('Should throw an error if uuid is invalid', async () => {
    const error = 'fail'
    jest.spyOn(uuidValidator, 'validate').mockReturnValueOnce({ error, isValid: false })

    await expect(() => archiveJob.archive('id')).rejects.toEqual(invalidRequest('invalid job id'))
  })

  test('Should call job repository with correct values', async () => {
    const jobRepoSpy = jest.spyOn(jobRepository, 'updateStatus')

    await archiveJob.archive('id')
    expect(jobRepoSpy).toHaveBeenCalledWith('archived','id')
  })

})
