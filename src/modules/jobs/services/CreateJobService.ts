import { invalidRequest } from '../../../shared/errors/invalidRequest'
import { notFound } from '../../../shared/errors/notFound'
import { CompanyRepository } from '../../companies/repositories/CompanyRepository'
import { CreateJob } from '../domain/CreateJob'
import { JobCreate, JobDTO } from '../domain/types'
import { JobValidator } from '../presentation/JobValidator'

export class CreateJobService implements CreateJob {
  constructor (
    private jobValidator: JobValidator,
    private companyRepository: CompanyRepository
  ) {}

  async create (job: JobCreate): Promise<JobDTO> {
    const validate = this.jobValidator.validate(job)

    if (!validate.isValid) {
      throw invalidRequest(validate.error)
    }

    const company = await this.companyRepository.get(job.company_id)

    if (!company) {
      throw notFound('company not found')
    }

    return '' as any
  }
}
