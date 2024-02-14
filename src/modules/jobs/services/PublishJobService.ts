import { invalidRequest } from '../../../shared/errors/invalidRequest'
import { notFound } from '../../../shared/errors/notFound'
import { PublishJob } from '../domain/PublishJob'
import { UUIDValidator } from '../presentation/UUIDValidator'
import { JobQueue } from '../repositories/JobQueue'
import { JobRepository } from '../repositories/JobRepository'

export class PublishJobService implements PublishJob {
  constructor (private UUIDValidator: UUIDValidator, private jobRepository: JobRepository, private jobQueue: JobQueue) {}
  async publish (id: string): Promise<void> {
    const validation = this.UUIDValidator.validate(id)

    if(!validation.isValid){
      throw invalidRequest("invalid job ID")
    }

    const job = await this.jobRepository.get(id)

    if(!job){
      throw notFound("job not founded")
    }

    await this.jobQueue.store(job)
  }
}
