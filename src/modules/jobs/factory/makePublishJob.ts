import { Knex } from 'knex'
import { PublishJobService } from '../services/PublishJobService'
import { KnexJobRepository } from '../infra/database/KnexJobRepository'
import { SQSJobQueue } from '../infra/queue/SQSJobQueue'
import { SQSConnection } from '../../../config/queue/SQSConnection'
import { ZodUUIDValidator } from '../adapters/ZodUUIDValidator'

export async function makePublishJob (id: string, knex: Knex) {
  const jobRepository = new KnexJobRepository(knex)
  const jobQueue = new SQSJobQueue(SQSConnection.connect())
  const UUIDValidator = new ZodUUIDValidator()

  const publishJob = new PublishJobService(UUIDValidator, jobRepository, jobQueue)

  await publishJob.publish(id)
}
