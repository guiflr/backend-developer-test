import { Request, Response, NextFunction } from 'express'

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    if (err.status) {
      return res.status(err.status).json(err)
    }

    return res.status(500).json({ message: 'Internal Server Error' })
  }

  next()
}
