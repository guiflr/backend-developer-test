import { CompanyRepositoryTest, companyData } from './factory'
import { GetCompany } from '../src/modules/companies/services/GetCompany'

describe('GetCompany', () => {
  const companyRepo = new CompanyRepositoryTest()
  const getCompany = new GetCompany(companyRepo)

  test('Should return error when param is invalid', async () => {
    const id = null as unknown as string

    const errorData = {
      message: 'Invalid or missing param',
      error: 'company "id" is invalid',
      status: 400
    }

    await expect(() => getCompany.get(id)).rejects.toEqual(errorData)
  })

  test('Should call company repository', async () => {
    const spyCompanyRepo = jest.spyOn(getCompany, 'get')

    const id = 'my-id'

    await getCompany.get(id)

    expect(spyCompanyRepo).toHaveBeenCalledWith(id)
  })

  test('Should return error when not found company', async () => {
    const id = 'id'

    jest
      .spyOn(companyRepo, 'get')
      .mockImplementationOnce(async () => null as any)

    const errorData = {
      message: 'company not found',
      error: '',
      status: 404
    }

    await expect(() => getCompany.get(id)).rejects.toEqual(errorData)
  })

  test('Should return company', async () => {
    const id = 'id'

    const company = await getCompany.get(id)

    expect(company).toEqual(companyData)
  })
})
