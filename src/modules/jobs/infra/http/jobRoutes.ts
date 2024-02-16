import { NextFunction, Request, Response, Router } from 'express'
import { makeCreateJob } from '../../factory/makeCreateJob'
import db from '../../../../config/database/knex/connection'
import { makePublishJob } from '../../factory/makePublishJob'
import { makeUpdateJob } from '../../factory/makeUpdateJob'
import { makeDeleteJob } from '../../factory/makeDeleteJob'
import { makeArchiveJob } from '../../factory/makeArchiveJob'

const jobRoutes = Router()

jobRoutes.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const job = await makeCreateJob(req.body, db)

    return res.status(201).send(job)
  } catch (err) {
    next(err)
  }
})

jobRoutes.put(
  '/:id/publish',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await makePublishJob(req.params.id, db)

      return res.status(200).send()
    } catch (err) {
      next(err)
    }
  }
)

jobRoutes.put(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await makeUpdateJob(req.body, req.params.id, db)

      return res.status(200).send()
    } catch (err) {
      next(err)
    }
  }
)

jobRoutes.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await makeDeleteJob(req.params.id, db)

      return res.status(200).send()
    } catch (err) {
      next(err)
    }
  }
)


jobRoutes.put(
  '/:id/archive',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await makeArchiveJob(req.params.id, db)

      return res.status(200).send()
    } catch (err) {
      next(err)
    }
  }
)


export { jobRoutes }
