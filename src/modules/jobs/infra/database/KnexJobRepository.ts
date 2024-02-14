import { Knex } from 'knex'
import { JobCreate, JobDTO } from '../../domain/types'
import { JobRepository } from '../../repositories/JobRepository'

export class KnexJobRepository implements JobRepository {
  constructor(private knex: Knex){}
  get(id: string): Promise<JobDTO> {
    throw new Error('Method not implemented.')
  }
  async store (job: JobCreate): Promise<JobDTO> {
    const jobCreated = await this.knex('jobs').insert(job).returning(['*'])

    if (Array.isArray(jobCreated)) {
      return jobCreated[0]
    }

    return jobCreated
  }
}
