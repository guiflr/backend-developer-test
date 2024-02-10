import { Companies, Company } from '../main/Companies'
import { CompanyRepository } from '../repositories/CompanyRepository'

export class GetCompany implements Companies {
  constructor (private companyRepository: CompanyRepository) {}
  
  async get (): Promise<Company[]> {
    const companies = await this.companyRepository.getAll()

    return companies
  }
}
