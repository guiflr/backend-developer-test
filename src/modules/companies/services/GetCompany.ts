import { invalidRequest } from '../../../shared/errors/invalidRequest'
import { notFound } from '../../../shared/errors/notFound'
import { Company } from '../main/Company'
import { CompanyDTO } from '../main/types'
import { CompanyRepository } from '../repositories/CompanyRepository'

export class GetCompany implements Company {
  constructor (private companyRepository: CompanyRepository) {}

  async get (id: string): Promise<CompanyDTO> {
    if (!id) {
      throw invalidRequest('company "id" is invalid')
    }

    const company = await this.companyRepository.get(id)

    if (!company) {
      throw notFound('company not found')
    }

    return company
  }
}
