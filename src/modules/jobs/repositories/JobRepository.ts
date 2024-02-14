import { JobCreate, JobDTO } from '../domain/types'

export interface JobRepository {
  store(job: JobCreate): Promise<JobDTO>
  get(id: string): Promise<JobDTO>
}
