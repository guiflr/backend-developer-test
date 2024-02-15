import { Knex } from 'knex'
import { JobCreate, JobDTO, UpdateJobData } from '../../domain/types'
import { JobRepository, Status } from '../../repositories/JobRepository'

export class KnexJobRepository implements JobRepository {
  constructor (private knex: Knex) {}
  update(data: UpdateJobData): Promise<void> {
    throw new Error('Method not implemented.')
  }
  async updateStatus(status: Status, id: string): Promise<void> {
    await this.knex('jobs').where({ id }).update({ status, updated_at: new Date() })
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
