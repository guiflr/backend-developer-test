import { Companies } from '../main/Companies'
import { Company } from '../main/types'
import { CompanyRepository } from '../repositories/CompanyRepository'

export class GetCompany implements Companies {
  constructor (private companyRepository: CompanyRepository) {}
  
  async get (): Promise<Company[]> {
    const companies = await this.companyRepository.getAll()

    return companies
  }
}
