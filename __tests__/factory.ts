import { CompanyDTO } from '../src/modules/companies/main/types'
import { CompanyRepository } from '../src/modules/companies/repositories/CompanyRepository'
import {
  JobValidator,
  JobValidatorResponse
} from '../src/modules/jobs/presentation/JobValidator'
import { JobCreate, JobDTO } from './modules/jobs/domain/types'
import {
  JobModerateResponse,
  JobModerator
} from './modules/jobs/presentation/JobModerator'
import {
  UUIDValidator
} from './modules/jobs/presentation/UUIDValidator'
import { JobQueue } from './modules/jobs/repositories/JobQueue'
import { JobRepository, Status } from './modules/jobs/repositories/JobRepository'

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
  company_id: 'e8d05ced-93b9-40a6-a1ca-423b2752a565',
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
  updateStatus(status: Status): Promise<void> {
    throw new Error('Method not implemented.')
  }
  async get (id: string): Promise<JobDTO> {
    return { id: 'id', ...jobData }
  }
  async store (job: JobCreate): Promise<JobDTO> {
    return { id: 'id', ...jobData }
  }
}

export class JobQueueTest implements JobQueue {
  async store (job: JobCreate): Promise<void> {}
}

export class JobModeratorTest implements JobModerator {
  async moderate (content: string): Promise<JobModerateResponse> {
    return { isHarmful: false }
  }
}

export class UUIDValidatorTest implements UUIDValidator {
  validate (id: string): JobValidatorResponse {
    return { error: 'id error', isValid: true }
  }
}
