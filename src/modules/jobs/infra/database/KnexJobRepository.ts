import db from '../../../../config/database/knex/connection'
import { JobCreate, JobDTO } from '../../domain/types'
import { JobRepository } from '../../repositories/JobRepository'

export class KnexJobRepository implements JobRepository {
  async store (job: JobCreate): Promise<JobDTO> {
    const jobCreated = await db('jobs').insert(job).returning(['*']).first()

    return jobCreated
  }
}
