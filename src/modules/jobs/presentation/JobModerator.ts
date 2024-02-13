export type JobModerateResponse = {
  isHarmful: boolean
  note?: string
}

export interface JobModerator {
  moderate(title: string, content: string): Promise<JobModerateResponse>
}
