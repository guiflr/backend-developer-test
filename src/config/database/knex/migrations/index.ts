import type { Knex } from 'knex'
import fs from 'node:fs'
import path from 'node:path'

exports.up = async function (knex: Knex) {
  return await knex.raw(
    fs.readFileSync(path.join(__dirname, '../../../../../ddl/models.sql'), 'utf8')
  )
}

exports.down = async function (knex: Knex) {
  await knex.schema.dropTableIfExists('jobs')
  return await knex.schema.dropSchemaIfExists('companies')
}
