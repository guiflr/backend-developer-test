import { Companies } from '../main/Companies'
import { CompanyDTO } from '../main/types'
import { CompanyRepository } from '../repositories/CompanyRepository'

export class GetCompanies implements Companies {
  constructor (private companyRepository: CompanyRepository) {}
  
  async get (): Promise<CompanyDTO[]> {
    const companies = await this.companyRepository.getAll()

    return companies
  }
}
