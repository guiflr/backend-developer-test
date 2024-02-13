import { JobCreate, JobDTO } from './types'

export interface ReadJob {
  read(jobData: JobCreate): Promise<void>
}
