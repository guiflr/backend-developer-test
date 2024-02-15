import { UpdateJobData } from "./types";

export interface UpdateJob {
  update(data: UpdateJobData, id: string): Promise<void>
}
