import { Company } from '../main/types'

export interface CompanyRepository {
  getAll(): Promise<Company[]>
}
