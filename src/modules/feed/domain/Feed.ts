import { FeedData } from "./types";

export interface Feed {
    get(): Promise<FeedData[]>
}