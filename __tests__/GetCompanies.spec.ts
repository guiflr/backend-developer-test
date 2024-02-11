import { CompanyRepositoryTest, companyData } from './factory'
import { GetCompanies } from '../src/modules/companies/services/GetCompanies'

describe('GetCompanies', () => {
  const getCompany = new CompanyRepositoryTest()
  const company = new GetCompanies(getCompany)

  test('Should call company repository', async () => {
    const spyCompanyRepo = jest.spyOn(getCompany, 'getAll')

    await company.get()

    expect(spyCompanyRepo).toHaveBeenCalled()
  })

  test('Should return companies', async () => {
    const companies = await company.get()

    expect(Array.isArray(companies)).toBe(true)

    const [comp] = companies

    expect(comp).toEqual(companyData)
  })
})
