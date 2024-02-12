import { JobCreate } from '../domain/types'

export type JobValidatorResponse = {
  isValid: boolean
  error: any
}

export interface JobValidator {
  validate(job: JobCreate): JobValidatorResponse
}
