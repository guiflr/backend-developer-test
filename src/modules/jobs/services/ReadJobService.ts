import { ReadJob } from '../domain/ReadJob'
import { JobDTO } from '../domain/types'
import { JobModerator } from '../presentation/JobModerator'
import { JobRepository } from '../repositories/JobRepository'

export class ReadJobService implements ReadJob {
  constructor (private jobModerator: JobModerator, private jobRepository: JobRepository) {}
  async read (jobData: JobDTO): Promise<void> {
    const moderate = await this.jobModerator.moderate(
      jobData.title,
      jobData.description
    )

    if (moderate.note) {
      jobData.notes = moderate.note
    }

    jobData.status = moderate.isHarmful ? 'rejected' : 'published'

    await this.jobRepository.updateStatus(jobData.status, jobData.id)
  }
}
