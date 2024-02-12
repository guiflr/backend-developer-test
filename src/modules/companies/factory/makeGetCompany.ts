import { KnexCompanyRepository } from '../infra/database/knex/KnexCompanyRepository'
import { GetCompany } from '../services/GetCompany'

export async function makeGetCompany (id: string) {
  const companyRepository = new KnexCompanyRepository()

  const getCompany = new GetCompany(companyRepository)

  return await getCompany.get(id)
}
