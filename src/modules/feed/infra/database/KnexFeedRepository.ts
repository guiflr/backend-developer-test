import { Knex } from 'knex'
import { Status, FeedData } from '../../domain/types'
import { FeedRepository } from '../../repositories/FeedRepository'

export class KnexFeedRepository implements FeedRepository {
  constructor (private db: Knex) {}
  async getByStatus (status: Status): Promise<FeedData[]> {
    const feed = await this.db('jobs')
      .select({
        id: 'jobs.id',
        title: 'jobs.title',
        description: 'jobs.description',
        created_at: 'jobs.created_at',
        company: 'companies.name'
      })
      .orderBy('jobs.created_at', 'desc')
      .where('jobs.status', '=', status)
      .innerJoin('companies', 'companies.id', 'jobs.company_id')

    return feed
  }
}
