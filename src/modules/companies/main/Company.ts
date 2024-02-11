import { Company } from './types'

export interface company {
  get(id: number): Promise<Company>
}
