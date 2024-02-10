import { Companies, Company } from '../src/modules/companies/main/Companies'
import { CompanyRepository } from '../src/modules/companies/repositories/CompanyRepository'
import { GetCompany } from '../src/modules/companies/services/GetCompany'

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
