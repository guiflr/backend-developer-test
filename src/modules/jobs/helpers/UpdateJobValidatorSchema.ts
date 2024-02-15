import { z } from 'zod'

export const UpdateJobValidatorSchema = z.object({
  title: z.string({ required_error: 'title required' }),
  description: z.string({ required_error: 'description required' }),
  location: z.string({ required_error: 'location required' }),
})
