import { ScheduledEvent, Context, Callback } from 'aws-lambda'
import db from './config/database/knex/connection'
import { S3Connection } from './config/cache/S3Connection'
import { makeUpdateFeed } from './modules/feed/factory/makeUpdateFeed'

export const handler = async (
  event: ScheduledEvent,
  context: Context,
  callback: Callback
) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false

    console.log('event: ', JSON.stringify(event))

    await makeUpdateFeed(db, S3Connection.connect())

    console.log('text: ', 'schedule finished')

    callback(null, 'finished')
  } catch (error) {
    console.log(error)
  }
}
