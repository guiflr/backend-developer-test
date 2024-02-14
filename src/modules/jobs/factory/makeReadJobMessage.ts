import { Knex } from 'knex'
import { OpenAPIJobModerator } from '../adapters/OpenAPIJobModerator'
import { JobCreate } from '../domain/types'
import { KnexJobRepository } from '../infra/database/KnexJobRepository'
import { ReadJobService } from '../services/ReadJobService'

export async function makeReadJobFunction (jobData: JobCreate, connection: Knex) {
  const jobModerator = new OpenAPIJobModerator()
  const jobRepository = new KnexJobRepository(connection)

  const readJobService = new ReadJobService(jobModerator, jobRepository)

  await readJobService.read(jobData)
}
