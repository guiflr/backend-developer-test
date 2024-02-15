import { JobCreate, JobDTO, UpdateJobData } from '../domain/types'

export type Status = 'draft' | 'published' | 'archived' | 'rejected' 

export interface JobRepository {
  store(job: JobCreate): Promise<JobDTO>
  get(id: string): Promise<JobDTO>
  updateStatus(status: Status, id: string): Promise<void>
  update(data: UpdateJobData, id: string): Promise<void>
  delete(id: string): Promise<void>
}
