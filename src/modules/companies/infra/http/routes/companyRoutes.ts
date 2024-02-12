import { NextFunction, Request, Response, Router, response } from 'express'
import { makeGetCompanies } from '../../../factory/makeGetCompanies'
import { makeGetCompany } from '../../../factory/makeGetCompany'

const companyRoutes = Router()

companyRoutes.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companies = await makeGetCompanies()

      return res.send(companies)
    } catch (err) {
      next(err)
    }
  }
)

companyRoutes.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const company = await makeGetCompany(req.params.id)

      return res.send(company)
    } catch (err) {
      next(err)
    }
  }
)


export { companyRoutes }