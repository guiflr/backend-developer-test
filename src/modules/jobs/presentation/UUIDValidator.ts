import { JobCreate } from '../domain/types'

export type JobValidatorResponse = {
  isValid: boolean
  error: any
}

export interface UUIDValidator {
  validate(id: string): JobValidatorResponse
}
