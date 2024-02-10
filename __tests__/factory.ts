import { Company } from '../src/modules/companies/main/types'
import { CompanyRepository } from '../src/modules/companies/repositories/CompanyRepository'

export const companyData: Company = {
  id: 'my-id',
  name: 'company',
  created_at: new Date(),
  updated_at: new Date()
}

export class CompanyRepositoryTest implements CompanyRepository {
  async getAll (): Promise<Company[]> {
    return [companyData]
  }
}
