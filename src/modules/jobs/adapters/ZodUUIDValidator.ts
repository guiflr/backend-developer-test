import { JobValidatorAbstract } from '../abstract/JobValidatorAbstract'
import { UUIDValidatorSchema } from '../helpers/UUIDValidator'

export class ZodUUIDValidator extends JobValidatorAbstract {
  schema(data: any): { success: boolean; error: any } {
    const schema =  UUIDValidatorSchema.safeParse(data)

    return { error: schema.success ? null : schema.error, success: schema.success }
  }
}
