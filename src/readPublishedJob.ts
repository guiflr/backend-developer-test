import { ScheduledEvent, Context, Callback } from 'aws-lambda'
import { makeReadJobFunction } from './modules/jobs/factory/makeReadJobMessage'
import db from './config/database/knex/connection'

export const handler = async (
  event: ScheduledEvent,
  context: Context,
  callback: Callback
) => {
  context.callbackWaitsForEmptyEventLoop = false

  console.log('event: ', JSON.stringify(event))
  
  console.log('text: ', 'schedule finished')

  callback(null, 'finished')
}
