import { SQSConnection } from '../../../config/queue/SQSConnection'
import { KnexCompanyRepository } from '../../companies/infra/database/knex/KnexCompanyRepository'
import { ZodJobValidator } from '../adapters/ZodJobValidator'
import { JobCreate } from '../domain/types'
import { SQSJobQueue } from '../infra/queue/SQSJobQueue'
import { CreateJobService } from '../services/CreateJobService'

export async function makeCreateJob (job: JobCreate) {
  const validator = new ZodJobValidator()
  const companyRepository = new KnexCompanyRepository()
  const jobQueue = new SQSJobQueue(SQSConnection.connect())

  const createJobService = new CreateJobService(
    validator,
    companyRepository,
    jobQueue
  )

  return await createJobService.create(job)
}
