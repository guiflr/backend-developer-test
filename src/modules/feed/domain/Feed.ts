export interface Feed {
    get(): Promise<FeedData[]>
}