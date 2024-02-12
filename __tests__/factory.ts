import { CompanyDTO } from '../src/modules/companies/main/types'
import { CompanyRepository } from '../src/modules/companies/repositories/CompanyRepository'
import {
  JobValidator,
  JobValidatorResponse
} from '../src/modules/jobs/presentation/JobValidator'
import { JobCreate, JobDTO } from './modules/jobs/domain/types'
import { JobQueue } from './modules/jobs/repositories/JobQueue'
import { JobRepository } from './modules/jobs/repositories/JobRepository'

export const companyData: CompanyDTO = {
  id: 'my-id',
  name: 'company',
  created_at: new Date(),
  updated_at: new Date()
}

export class CompanyRepositoryTest implements CompanyRepository {
  async get (id: string): Promise<CompanyDTO> {
    return companyData
  }
  async getAll (): Promise<CompanyDTO[]> {
    return [companyData]
  }
}

export const jobData: JobCreate = {
  company_id: '1f400d2d-211f-4281-a17b-48bf5bd72d9a',
  description: 'my-job',
  location: 'CWB',
  status: 'draft',
  title: 'title'
}

export class JobValidatorTest implements JobValidator {
  validate (job: JobCreate): JobValidatorResponse {
    return { isValid: true, error: '' }
  }
}

export class JobRepositoryTest implements JobRepository {
  async store (job: JobCreate): Promise<JobDTO> {
    return { id: 'id', ...jobData }
  }
}

export class JobQueueTest implements JobQueue {
  async store (job: JobCreate): Promise<void> {}
}
