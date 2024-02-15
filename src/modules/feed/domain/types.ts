export type FeedData = {
  id: string
  title: string
  description: string
  created_at: Date
  company: string
}

export type Status = 'draft' | 'published' | 'archived' | 'rejected' 