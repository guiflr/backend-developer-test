export interface DeleteJob {
  delete(id: string): Promise<void>
}
