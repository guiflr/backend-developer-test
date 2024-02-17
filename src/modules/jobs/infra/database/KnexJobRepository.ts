import { Knex } from 'knex'
import { JobCreate, JobDTO, UpdateJobData } from '../../domain/types'
import { JobRepository, Status } from '../../repositories/JobRepository'

type UpdateStatustatus = { status: Status; notes?: string | undefined }

export class KnexJobRepository implements JobRepository {
  constructor(private knex: Knex) { }
  async updateStatus({ status, notes }: UpdateStatustatus, id: string): Promise<void> {

    await this.knex('jobs')
      .where({ id })
      .update({ status, notes, updated_at: new Date() })
  }

  async delete(id: string): Promise<void> {
    await this.knex('jobs').where({ id }).delete()
  }

  async update(
    { description, location, title }: UpdateJobData,
    id: string
  ): Promise<void> {
    await this.knex('jobs')
      .where({ id })
      .update({ description, location, title, updated_at: new Date() })
  }



  async get(id: string): Promise<JobDTO> {
    const jobCreated = await this.knex('jobs').where({ id }).first()

    return jobCreated
  }

  async store(job: JobCreate): Promise<JobDTO> {
    const jobCreated = await this.knex('jobs').insert(job).returning(['*'])

    if (Array.isArray(jobCreated)) {
      return jobCreated[0]
    }

    return jobCreated
  }
}
