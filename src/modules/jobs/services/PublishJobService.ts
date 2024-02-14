import { notFound } from '../../../shared/errors/notFound'
import { PublishJob } from '../domain/PublishJob'
import { JobQueue } from '../repositories/JobQueue'
import { JobRepository } from '../repositories/JobRepository'

export class PublishJobService implements PublishJob {
  constructor (private jobRepository: JobRepository, private jobQueue: JobQueue) {}
  async publish (id: string): Promise<void> {
    const job = await this.jobRepository.get(id)

    if(!job){
      throw notFound("job not founded")
    }

    await this.jobQueue.store(job)
  }
}
