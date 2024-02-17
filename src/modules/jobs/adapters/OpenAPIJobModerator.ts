import 'dotenv/config'

import { gptApi } from '../../../config/http/gptApi'
import { gptRequestBody, systemMessage, user } from '../helpers/makeGtpMessage'
import { JobModerateResponse, JobModerator } from '../presentation/JobModerator'
import { ContentMessage, GptResponse } from './types'

export class OpenAPIJobModerator implements JobModerator {
  async moderate (title: string, content: string): Promise<JobModerateResponse> {
    const userMessage = user(title, content)

    const requestBody = gptRequestBody(userMessage, systemMessage)    

    const response = await gptApi.post(`chat/completions`, requestBody)

    const data: GptResponse = response.data

    const [choice] = data.choices

    const parsedContent: ContentMessage = JSON.parse(choice.message.content)

    return { isHarmful: parsedContent.isHarmful, note: parsedContent.notice }
  }
}
