import { Request, Response, NextFunction } from 'express'

export const notFoundResource = (req: Request, res: Response) => {
  return res.status(404).json({ message: 'Not Found Resource' })
}
