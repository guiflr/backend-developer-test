import { Knex } from 'knex'
import { DeleteJobService } from '../services/DeleteJobService'
import { ZodUUIDValidator } from '../adapters/ZodUUIDValidator'
import { KnexJobRepository } from '../infra/database/KnexJobRepository'

export async function makeDeleteJob (id: string, knex: Knex) {
  const uuidValidator = new ZodUUIDValidator()
  const jobRepository = new KnexJobRepository(knex)

  const deleteJob = new DeleteJobService(uuidValidator, jobRepository)

  await deleteJob.delete(id)
}
