import { NextFunction, Request, Response, Router } from 'express'
import { makeCreateJob } from '../../factory/makeCreateJob'
import db from '../../../../config/database/knex/connection'
import { makePublishJob } from '../../factory/makePublishJob'

const jobRoutes = Router()

jobRoutes.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await makeCreateJob(req.body, db)

    return res.status(201).send()
  } catch (err) {
    next(err)
  }
})

jobRoutes.put('/:id/publish', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await makePublishJob(req.params.id, db)

    return res.status(200).send()
  } catch (err) {
    next(err)
  }
})

export { jobRoutes }
