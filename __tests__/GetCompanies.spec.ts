import { CompanyRepositoryTest, companyData } from './factory'
import { GetCompanies } from '../src/modules/companies/services/GetCompanies'

describe('GetCompanies', () => {
  const getCompany = new CompanyRepositoryTest()
  const company = new GetCompanies(getCompany)

  test('Should return companies', async () => {
    const companies = await company.get()

    expect(Array.isArray(companies)).toBe(true)

    const [comp] = companies

    expect(comp).toEqual(companyData)
  })
})
