import { GetCompany } from "../src/modules/companies/services/GetCompany"
import { CompanyRepositoryTest, companyData } from "./factory"

describe("GetCompany", () => {
    const getCompany = new CompanyRepositoryTest()
    const company = new GetCompany(getCompany)
    
    test("Should return companies", async () => {
        const companies = await company.get()

        expect(Array.isArray(companies)).toBe(true)

        const [comp] = companies

        expect(comp).toEqual(companyData)
    })
})