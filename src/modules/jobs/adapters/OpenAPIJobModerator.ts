import { JobModerateResponse, JobModerator } from '../presentation/JobModerator'

export class OpenAPIJobModerator implements JobModerator {
  async moderate (title: string, content: string): Promise<JobModerateResponse> {
    return { isHarmful: false }
  }
}
