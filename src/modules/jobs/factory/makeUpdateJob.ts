import { Knex } from 'knex'
import { UpdateJobData } from '../domain/types'
import { UpdateJobService } from '../services/UpdateJobService'
import { ZodUpdateJobValidator } from '../adapters/ZodUpdateJobValidator'
import { ZodUUIDValidator } from '../adapters/ZodUUIDValidator'
import { KnexJobRepository } from '../infra/database/KnexJobRepository'

export async function makeUpdateJob (
  data: UpdateJobData,
  id: string,
  knex: Knex
) {
  const updateJobValidator = new ZodUpdateJobValidator()
  const uuidValidator = new ZodUUIDValidator()
  const jobRepository = new KnexJobRepository(knex)

  const updateJobService = new UpdateJobService(
    updateJobValidator,
    uuidValidator,
    jobRepository
  )

  await updateJobService.update(data, id)
}
