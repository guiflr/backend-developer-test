import { FeedData, Status } from '../domain/types'

export interface FeedRepository {
  getByStatus(status: Status): Promise<FeedData>
}
