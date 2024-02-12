import { NextFunction, Request, Response, Router } from 'express'
import { makeCreateJob } from '../../factory/makeCreateJob'

const jobRoutes = Router()

jobRoutes.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const job = await makeCreateJob(req.body)

    return res.send(job)
  } catch (err) {
    next(err)
  }
})

export { jobRoutes }
