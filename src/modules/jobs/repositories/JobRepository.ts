import { JobCreate, JobDTO } from '../domain/types'

export type Status = 'draft' | 'published' | 'archived' | 'rejected' 

export interface JobRepository {
  store(job: JobCreate): Promise<JobDTO>
  get(id: string): Promise<JobDTO>
  updateStatus(status: Status, id: string): Promise<void>
}
