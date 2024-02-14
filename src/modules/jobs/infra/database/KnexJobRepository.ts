import { Knex } from 'knex'
import { JobCreate, JobDTO } from '../../domain/types'
import { JobRepository, Status } from '../../repositories/JobRepository'

export class KnexJobRepository implements JobRepository {
  constructor (private knex: Knex) {}
  updateStatus(status: Status): Promise<void> {
    throw new Error('Method not implemented.')
  }
  async get (id: string): Promise<JobDTO> {
    const jobCreated = await this.knex('jobs').where({ id }).first()

    return jobCreated
  }

  async store (job: JobCreate): Promise<JobDTO> {
    const jobCreated = await this.knex('jobs').insert(job).returning(['*'])

    if (Array.isArray(jobCreated)) {
      return jobCreated[0]
    }

    return jobCreated
  }
}
