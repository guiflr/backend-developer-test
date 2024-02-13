import { NextFunction, Request, Response, Router } from 'express'
import { makeCreateJob } from '../../factory/makeCreateJob'

const jobRoutes = Router()

jobRoutes.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await makeCreateJob(req.body)

    return res.status(201).send()
  } catch (err) {
    next(err)
  }
})

export { jobRoutes }
