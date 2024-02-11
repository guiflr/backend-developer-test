import { CompanyDTO } from '../main/types'

export interface CompanyRepository {
  getAll(): Promise<CompanyDTO[]>
  get(id: string): Promise<CompanyDTO>
}
