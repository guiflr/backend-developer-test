export interface ArchiveJob {
    archive(id: string): Promise<void>
} 