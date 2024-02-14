import { NextFunction, Request, Response, Router } from 'express'
import { makeCreateJob } from '../../factory/makeCreateJob'
import db from '../../../../config/database/knex/connection'

const jobRoutes = Router()

jobRoutes.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await makeCreateJob(req.body, db)

    return res.status(201).send()
  } catch (err) {
    next(err)
  }
})

export { jobRoutes }
