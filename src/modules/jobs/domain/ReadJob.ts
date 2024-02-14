import { JobCreate, JobDTO } from './types'

export interface ReadJob {
  read(jobData: JobDTO): Promise<void>
}
