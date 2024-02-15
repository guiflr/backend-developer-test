import { invalidRequest } from '../../../shared/errors/invalidRequest'
import { ArchiveJob } from '../domain/ArchiveJob'
import { UUIDValidator } from '../presentation/UUIDValidator'
import { JobRepository } from '../repositories/JobRepository'

export class ArchiveJobService implements ArchiveJob {
  constructor (
    private uuidValidator: UUIDValidator,
    private jobRepository: JobRepository
  ) {}
  async archive (id: string): Promise<void> {
    const validation = this.uuidValidator.validate(id)

    if (!validation.isValid) {
      throw invalidRequest('invalid job id')
    }

    await this.jobRepository.updateStatus('archived', id)
  }
}
