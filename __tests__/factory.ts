import { CompanyDTO } from '../src/modules/companies/main/types'
import { CompanyRepository } from '../src/modules/companies/repositories/CompanyRepository'

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
