import { JobCreate, JobDTO } from '../domain/types'

export interface JobRepository {
  store(job: JobCreate): Promise<JobDTO>
}
