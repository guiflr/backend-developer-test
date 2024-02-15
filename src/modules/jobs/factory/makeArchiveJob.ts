import { Knex } from 'knex'
import { DeleteJobService } from '../services/DeleteJobService'
import { ZodUUIDValidator } from '../adapters/ZodUUIDValidator'
import { KnexJobRepository } from '../infra/database/KnexJobRepository'
import { ArchiveJobService } from '../services/ArchiveJobService'

export async function makeArchiveJob (id: string, knex: Knex) {
  const uuidValidator = new ZodUUIDValidator()
  const jobRepository = new KnexJobRepository(knex)

  const archiveJob = new ArchiveJobService(uuidValidator, jobRepository)

  await archiveJob.archive(id)
}
