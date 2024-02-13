import { ReadJob } from '../domain/ReadJob'
import { JobDTO } from '../domain/types'
import { JobModerator } from '../presentation/JobModerator'

export class ReadJobService implements ReadJob {
  constructor(private jobModerator: JobModerator){}
  async read (jobData: JobDTO): Promise<void> {
    const moderate = await this.jobModerator.moderate(jobData.title, jobData.description)
  }
}
