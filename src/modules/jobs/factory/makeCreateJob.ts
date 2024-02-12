import { KnexCompanyRepository } from '../../companies/infra/database/knex/KnexCompanyRepository'
import { ZodJobValidator } from '../adapters/ZodJobValidator'
import { JobCreate } from '../domain/types'
import { KnexJobRepository } from '../infra/database/KnexJobRepository'
import { CreateJobService } from '../services/CreateJobService'

export function makeCreateJob (job: JobCreate) {
  const validator = new ZodJobValidator()
  const companyRepository = new KnexCompanyRepository()
  const jobRepository = new KnexJobRepository()

  const createJobService = new CreateJobService(
    validator,
    companyRepository,
    jobRepository
  )

  return createJobService.create(job)
}
