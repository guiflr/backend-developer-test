import { KnexCompanyRepository } from '../infra/database/knex/KnexCompanyRepository'
import { GetCompanies } from '../services/GetCompanies'

export async function makeGetCompanies () {
  const companyRepo = new KnexCompanyRepository()

  const getCompany = new GetCompanies(companyRepo)

  return await getCompany.get()
}
