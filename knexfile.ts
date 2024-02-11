import type { Knex } from 'knex'

// Update with your config settings.
import 'dotenv/config'

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
    migrations: {
      directory: './src/config/database/knex'
    }
  }
}

module.exports = config
