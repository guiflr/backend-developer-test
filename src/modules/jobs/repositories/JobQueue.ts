import { JobCreate } from '../domain/types'

export interface JobQueue {
  store(job: JobCreate): Promise<void>
}
