import { Knex } from "knex";
import { UpdateFeedService } from "../services/UpdateFeedService";
import { KnexFeedRepository } from "../infra/database/KnexFeedRepository";

export async function makeUpdateFeed(db: Knex){
    const feedRepository = new KnexFeedRepository(db)

    const updateFeedService = new UpdateFeedService(feedRepository)
}