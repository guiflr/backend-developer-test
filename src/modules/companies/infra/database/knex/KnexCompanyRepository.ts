import { Company } from '../../../main/types'
import { CompanyRepository } from '../../../repositories/CompanyRepository'

export class KnexCompanyRepository implements CompanyRepository {
  async getAll (): Promise<Company[]> {
    return []
  }
}
