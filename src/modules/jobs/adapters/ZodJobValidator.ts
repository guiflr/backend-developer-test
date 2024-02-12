import { getZodErrors } from '../../../shared/getZodErrors'
import { JobCreate } from '../domain/types'
import { JobValidatorSchema } from '../helpers/JobValidatorSchema'
import {
  JobValidator,
  JobValidatorResponse
} from '../presentation/JobValidator'

export class ZodJobValidator implements JobValidator {
  validate (job: JobCreate): JobValidatorResponse {
    const validation = JobValidatorSchema.safeParse(job)

    if (validation.success) {
      return { error: '', isValid: true }
    }

    const error = JSON.stringify(validation.error)

    const errors = getZodErrors(error)

    return { isValid: false, error: errors }
  }
}
