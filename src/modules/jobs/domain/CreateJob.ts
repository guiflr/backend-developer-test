import { JobCreate, JobDTO } from './types'

export interface CreateJob {
  create(job: JobCreate): Promise<JobDTO>
}
