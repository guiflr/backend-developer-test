import { CompanyDTO } from './types'

export interface Company {
  get(id: string): Promise<CompanyDTO>
}
