import { JobDTO } from '../domain/types'

export interface JobQueue {
  store(job: JobDTO): Promise<void>
}
