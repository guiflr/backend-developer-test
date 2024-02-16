import { Router, Request, Response, NextFunction } from 'express'
import { makeGetFeed } from '../../factory/makeGetFeed'

const feedRoutes = Router()

feedRoutes.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const feed = await makeGetFeed()

    return res.status(200).send(feed)
  } catch (err) {
    next(err)
  }
})

export { feedRoutes }
