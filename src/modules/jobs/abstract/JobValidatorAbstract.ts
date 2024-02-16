import { getZodErrors } from "../../../shared/getZodErrors";
import { JobValidator, JobValidatorResponse } from "../presentation/JobValidator";

export abstract class JobValidatorAbstract implements JobValidator {
    validate(job: any): JobValidatorResponse {
        const validation = this.schema(job)

        if (validation.success) {
            return { error: '', isValid: true }
        }

        const error = JSON.stringify(validation.error)

        const errors = getZodErrors(error)

        return { isValid: false, error: errors }
    }

    abstract schema(data: any): { success: boolean, error: any }
}