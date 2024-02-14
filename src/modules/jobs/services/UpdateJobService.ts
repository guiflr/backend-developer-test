import { invalidRequest } from '../../../shared/errors/invalidRequest'
import { UpdateJob } from '../domain/UpdateJob'
import { UpdateJobData } from '../domain/types'
import { UpdateJobValidator } from '../presentation/UpdateJobValidator'

export class UpdateJobService implements UpdateJob {
  constructor (private updateJobValidator: UpdateJobValidator) {}
  async update (data: UpdateJobData, id: string): Promise<void> {
    const validation = this.updateJobValidator.validator(data)
    
    if(!validation.isValid){
      throw invalidRequest(validation.error)
    }
  }
}
