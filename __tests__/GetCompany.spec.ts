import { CompanyRepositoryTest } from './factory'
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
})
