import { getZodErrors } from '../../../shared/getZodErrors'
import { UUIDValidatorSchema } from '../helpers/UUIDValidator'
import { JobValidatorResponse, UUIDValidator } from '../presentation/UUIDValidator'

export class ZodUUIDValidator implements UUIDValidator {
  validate (id: string): JobValidatorResponse {
    const validation = UUIDValidatorSchema.safeParse(id)

    if (validation.success) {
      return { error: '', isValid: true }
    }

    const error = JSON.stringify(validation.error)

    const errors = getZodErrors(error)

    return { isValid: false, error: errors }
  }
}
