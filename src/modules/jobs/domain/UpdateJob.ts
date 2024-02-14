export interface UpdateJob {
  update(data: UpdateJobData, id: string): Promise<void>
}
