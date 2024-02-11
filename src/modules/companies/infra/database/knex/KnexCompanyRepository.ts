import { CompanyDTO } from '../../../main/types'
import { CompanyRepository } from '../../../repositories/CompanyRepository'
import db from '../../../../../config/database/knex/connection'

export class KnexCompanyRepository implements CompanyRepository {
  async getAll (): Promise<CompanyDTO[]> {
    return await db('companies')
  }
}
