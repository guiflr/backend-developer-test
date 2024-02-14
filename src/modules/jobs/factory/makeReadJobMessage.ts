import { Knex } from 'knex'
import { OpenAPIJobModerator } from '../adapters/OpenAPIJobModerator'
import { JobCreate, JobDTO } from '../domain/types'
import { KnexJobRepository } from '../infra/database/KnexJobRepository'
import { ReadJobService } from '../services/ReadJobService'

export async function makeReadJobFunction (jobData: JobDTO, connection: Knex) {
  const jobModerator = new OpenAPIJobModerator()
  const jobRepository = new KnexJobRepository(connection)

  const readJobService = new ReadJobService(jobModerator, jobRepository)

  await readJobService.read(jobData)
}
