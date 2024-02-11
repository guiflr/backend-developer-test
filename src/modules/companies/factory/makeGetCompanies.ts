import { KnexCompanyRepository } from '../infra/database/knex/KnexCompanyRepository'
import { GetCompany } from '../services/GetCompany'

export async function makeGetCompanies () {
  const companyRepo = new KnexCompanyRepository()

  const getCompany = new GetCompany(companyRepo)

  return await getCompany.get()
}
