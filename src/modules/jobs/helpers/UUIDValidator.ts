import { z } from 'zod'

export const UUIDValidator = z
  .string({ required_error: 'company_id required' })
  .uuid({ message: 'invalid company_id uuid' })
