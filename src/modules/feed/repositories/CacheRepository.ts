import { FeedData } from "../domain/types";

export interface CacheRepository {
    update(data: FeedData[]): Promise<void>
}