export interface PublishJob {
  publish(id: string): Promise<void>
}
