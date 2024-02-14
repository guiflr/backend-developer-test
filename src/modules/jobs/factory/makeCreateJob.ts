import { Knex } from 'knex'
import { SQSConnection } from '../../../config/queue/SQSConnection'
import { KnexCompanyRepository } from '../../companies/infra/database/knex/KnexCompanyRepository'
import { ZodJobValidator } from '../adapters/ZodJobValidator'
import { JobCreate } from '../domain/types'
import { KnexJobRepository } from '../infra/database/KnexJobRepository'
import { SQSJobQueue } from '../infra/queue/SQSJobQueue'
import { CreateJobService } from '../services/CreateJobService'

export async function makeCreateJob (job: JobCreate, knex: Knex) {
  const validator = new ZodJobValidator()
  const companyRepository = new KnexCompanyRepository()
  const jobRepository = new KnexJobRepository(knex)
  const jobQueue = new SQSJobQueue(SQSConnection.connect())

  const createJobService = new CreateJobService(
    validator,
    companyRepository,
    jobRepository
  )

  return await createJobService.create(job)
}
