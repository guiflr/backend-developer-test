import { CompanyDTO } from '../src/modules/companies/main/types'
import { CompanyRepository } from '../src/modules/companies/repositories/CompanyRepository'
import { JobValidator, JobValidatorResponse } from '../src/modules/jobs/presentation/JobValidator'
import { JobCreate } from './modules/jobs/domain/types'

export const companyData: CompanyDTO = {
  id: 'my-id',
  name: 'company',
  created_at: new Date(),
  updated_at: new Date()
}

export class CompanyRepositoryTest implements CompanyRepository {
  async get(id: string): Promise<CompanyDTO> {
    return companyData
  }
  async getAll (): Promise<CompanyDTO[]> {
    return [companyData]
  }
}

export const jobData: JobCreate = {
  company_id: 'company_id',
  description: 'my-job',
  location: 'CWB',
  status: 'draft',
  title: 'title'
}


export class JobValidatorTest implements JobValidator {
  validate(job: JobCreate): JobValidatorResponse {
    return { isValid: true, error: '' }
  }

}