import { app } from './shared/app'
import serverless from 'serverless-http'

export const handler = serverless(app)
