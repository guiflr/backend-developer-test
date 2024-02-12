import { z } from 'zod'

export const JobValidatorSchema = z.object({
  title: z.string({ required_error: 'title required' }),
  description: z.string({ required_error: 'description required' }),
  location: z.string({ required_error: 'location required' }),
  company_id: z.string({ required_error: 'company_id required' }),
  status: z.enum(['draft', 'published', 'archived', 'rejected'], {
    required_error: 'status required',
    description:
      'only valid values: draft, published, archived, rejected',
  }),
  notes: z.string().optional()
})
