import { S3Client } from '@aws-sdk/client-s3'

class S3Connection {
  static connect (): S3Client {
    const region = process.env.AWS_REGION as string
    const accessKeyId = process.env.AWS_ACCESS_KEY_ID as string
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY as string

    return new S3Client({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey
      }
    })
  }
}

export { S3Connection }
