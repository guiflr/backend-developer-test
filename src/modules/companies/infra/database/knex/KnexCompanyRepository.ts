import { Company } from '../../../main/types'
import { CompanyRepository } from '../../../repositories/CompanyRepository'
import knex from '../../../../../../knexfile'

export class KnexCompanyRepository implements CompanyRepository {
  async getAll (): Promise<Company[]> {
    return await knex('companies')
  }
}
