// Update with your config settings.
import 'dotenv/config'

interface KnexConfig {
  [key: string]: object
}

const config: KnexConfig = {
  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
    migrations: {
      directory: './src/config/database/knex/migrations'
    },
    pool: { min: 1, max: 10 }
  }
}

export default config
