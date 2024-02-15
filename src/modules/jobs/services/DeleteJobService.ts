import { invalidRequest } from '../../../shared/errors/invalidRequest'
import { DeleteJob } from '../domain/DeleteJob'
import { UUIDValidator } from '../presentation/UUIDValidator'
import { JobRepository } from '../repositories/JobRepository'

export class DeleteJobService implements DeleteJob {
  constructor (
    private uuidValidator: UUIDValidator,
    private jobRepository: JobRepository
  ) {}
  async delete (id: string): Promise<void> {
    const validation = this.uuidValidator.validate(id)

    if (!validation.isValid) {
      throw invalidRequest('invalid job id')
    }

    await this.jobRepository.delete(id)
  }
}
