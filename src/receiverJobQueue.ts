import { SQSEvent, Context, Callback } from 'aws-lambda'
import { makeReadJobFunction } from './modules/jobs/factory/makeReadJobMessage'
import db from './config/database/knex/connection'

export const handler = async (
  event: SQSEvent,
  context: Context,
  callback: Callback
) => {
  context.callbackWaitsForEmptyEventLoop = false

  console.log('event: ', JSON.stringify(event))

  var body = event.Records[0].body

  const data = JSON.parse(body)
  
  console.log('text: ', data)

  await makeReadJobFunction(data, db)

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Job saved on queue',
      input: event
    })
  }

  callback(null, response)
}
