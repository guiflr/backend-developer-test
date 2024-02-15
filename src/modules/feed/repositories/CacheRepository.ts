import { FeedData } from "../../jobs/domain/types";

export interface CacheRepository {
    update(data: FeedData): Promise<void>
}