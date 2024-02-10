export type Company = {
  id: string
  name: string
  created_at: Date
  updated_at: Date
}

export interface Companies {
  get(): Promise<Company[]>
}
