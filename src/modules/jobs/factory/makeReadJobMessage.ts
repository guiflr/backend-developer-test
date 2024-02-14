import { OpenAPIJobModerator } from '../adapters/OpenAPIJobModerator'
import { JobCreate } from '../domain/types'
import { KnexJobRepository } from '../infra/database/KnexJobRepository'
import { ReadJobService } from '../services/ReadJobService'

export async function makeReadJobFunction (jobData: JobCreate) {
  const jobModerator = new OpenAPIJobModerator()
  const jobRepository = new KnexJobRepository()

  const readJobService = new ReadJobService(jobModerator, jobRepository)

  await readJobService.read(jobData)
}
