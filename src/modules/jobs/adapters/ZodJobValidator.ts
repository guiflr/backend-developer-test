import { JobValidatorAbstract } from '../abstract/JobValidatorAbstract';
import { JobValidatorSchema } from '../helpers/JobValidatorSchema'

export class ZodJobValidator extends JobValidatorAbstract {
  schema(data: any): { success: boolean; error: any } {
    const schema =  JobValidatorSchema.safeParse(data)

    return { error: schema.success ? null : schema.error, success: schema.success }
  }
}
