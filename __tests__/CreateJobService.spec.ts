import { CreateJobService } from '../src/modules/jobs/services/CreateJobService'
import {
  CompanyRepositoryTest,
  JobRepositoryTest,
  JobValidatorTest,
  jobData
} from './factory'
import { CompanyDTO } from '../src/modules/companies/main/types'

describe('CreateJobService', () => {
  const jobValidator = new JobValidatorTest()
  const companyRepo = new CompanyRepositoryTest()
  const jobRepository = new JobRepositoryTest()

  const createJobService = new CreateJobService(
    jobValidator,
    companyRepo,
    jobRepository
  )

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

  test('Should call company repository with correct value', async () => {
    const companyRepoSpy = jest.spyOn(companyRepo, 'get')

    await createJobService.create(jobData)

    expect(companyRepoSpy).toHaveBeenCalledWith(jobData.company_id)
  })

  test('Should throw an error when data is invalid', async () => {
    jest
      .spyOn(companyRepo, 'get')
      .mockResolvedValueOnce(null as any as CompanyDTO)

    await expect(() => createJobService.create(jobData)).rejects.toEqual({
      message: 'company not found',
      error: '',
      status: 404
    })
  })

  test('Should call company repository with correct value', async () => {
    const jobRepoSpy = jest.spyOn(jobRepository, 'store')

    await createJobService.create(jobData)

    expect(jobRepoSpy).toHaveBeenCalledWith(jobData)
  })
})
