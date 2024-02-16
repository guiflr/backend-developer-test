
import { JobValidatorAbstract } from "../abstract/JobValidatorAbstract";
import { UpdateJobValidatorSchema } from "../helpers/UpdateJobValidatorSchema";

export class ZodUpdateJobValidator extends JobValidatorAbstract {
  schema(data: any): { success: boolean; error: any } {
    const schema =  UpdateJobValidatorSchema.safeParse(data)

    return { error: schema.success ? null : schema.error, success: schema.success }
  }
}
