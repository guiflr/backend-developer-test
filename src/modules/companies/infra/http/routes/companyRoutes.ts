import { NextFunction, Request, Response, Router, response } from 'express'
import { makeGetCompanies } from '../../../factory/makeGetCompanies'

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


export { companyRoutes }