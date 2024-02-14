import { SQSEvent, Context, Callback } from 'aws-lambda'
import { makeReadJobFunction } from './modules/jobs/factory/makeReadJobMessage'

export const handler = async (
  event: SQSEvent,
  context: Context,
  callback: Callback
) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Job saved on queue',
      input: event
    })
  }

  console.log('event: ', JSON.stringify(event))

  var body = event.Records[0].body

  const data = JSON.parse(body)
  
  console.log('text: ', data)

  await makeReadJobFunction(data)

  callback(null, response)
}
