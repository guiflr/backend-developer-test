import { getZodErrors } from "../../../shared/getZodErrors";
import { UpdateJobData } from "../domain/types";
import { UpdateJobValidatorSchema } from "../helpers/UpdateJobValidatorSchema";
import { JobValidatorResponse, UpdateJobValidator } from "../presentation/UpdateJobValidator";

export class ZodUpdateJobValidator implements UpdateJobValidator{
    validator(data: UpdateJobData): JobValidatorResponse {
        const validation = UpdateJobValidatorSchema.safeParse(data)

        if (validation.success) {
          return { error: '', isValid: true }
        }
    
        const error = JSON.stringify(validation.error)
    
        const errors = getZodErrors(error)
    
        return { isValid: false, error: errors }
    }
    
}