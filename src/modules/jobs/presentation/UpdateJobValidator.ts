import { UpdateJobData } from "../domain/types"

export type JobValidatorResponse = {
    isValid: boolean
    error: any
  }

export interface UpdateJobValidator {
    validate(data: any): JobValidatorResponse
}