import { Company } from '../../../main/types'
import { CompanyRepository } from '../../../repositories/CompanyRepository'
import db from '../../../../../config/database/knex/connection'

export class KnexCompanyRepository implements CompanyRepository {
  async getAll (): Promise<Company[]> {
    return await db('companies')
  }
}
