import { invalidRequest } from '../../../shared/errors/invalidRequest'
import { CreateJob } from '../domain/CreateJob'
import { JobCreate, JobDTO } from '../domain/types'
import { JobValidator } from '../presentation/JobValidator'

export class CreateJobService implements CreateJob {
  constructor (private jobValidator: JobValidator) {}

  async create (job: JobCreate): Promise<JobDTO> {
    const validate = this.jobValidator.validate(job)

    if (!validate.isValid) {
      throw invalidRequest(validate.error)
    }

    return '' as any
  }
}
