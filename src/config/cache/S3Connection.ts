import { S3Client } from '@aws-sdk/client-s3'

class S3Connection {
  static connect (): S3Client {
    return new S3Client({ region: process.env.AWS_REGION })
  }
}

export { S3Connection }
