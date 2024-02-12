import { CompanyDTO } from '../../companies/main/types'

export type JobCreate = {
  company_id: string
  title: string
  description: string
  location: string
  notes?: string
  status: 'draft' | 'published' | 'archived' | 'rejected'
}

export interface JobDTO extends JobCreate {
  id: string
}

export interface JobCompany extends JobDTO {
  company: CompanyDTO
}
