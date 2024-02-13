import { JobDTO } from './types'

export interface ReadJob {
  read(jobData: JobDTO): Promise<void>
}
