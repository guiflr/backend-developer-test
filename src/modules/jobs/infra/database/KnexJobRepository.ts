import { Knex } from 'knex'
import { JobCreate, JobDTO } from '../../domain/types'
import { JobRepository, Status } from '../../repositories/JobRepository'

export class KnexJobRepository implements JobRepository {
  constructor (private knex: Knex) {}
  async updateStatus(status: Status, id: string): Promise<void> {
    await this.knex('jobs').where({ id }).update({ status })
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
