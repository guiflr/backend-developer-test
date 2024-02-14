import { getZodErrors } from '../../../shared/getZodErrors'
import { JobCreate } from '../domain/types'
import { JobValidatorSchema } from '../helpers/JobValidatorSchema'
import { JobValidatorResponse, UUIDValidator } from '../presentation/UUIDValidator'

export class ZodUUIDValidator implements UUIDValidator {
  validate (id: string): JobValidatorResponse {
    const validation = JobValidatorSchema.safeParse(id)

    if (validation.success) {
      return { error: '', isValid: true }
    }

    const error = JSON.stringify(validation.error)

    const errors = getZodErrors(error)

    return { isValid: false, error: errors }
  }
}
