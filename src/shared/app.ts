import express from 'express'
import cors from 'cors'

import { companyRoutes } from '../modules/companies/infra/http/routes/companyRoutes'
import { errorHandler } from './errors/http/errorHandler'
import { notFoundResource } from './errors/http/notFoundResource'
import { jobRoutes } from '../modules/jobs/infra/http/jobRoutes'
import { feedRoutes } from '../modules/feed/infra/http/feedRoutes'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/companies', companyRoutes)
app.use('/jobs', jobRoutes)
app.use('/feed', feedRoutes)

app.use(errorHandler)

app.use(notFoundResource)

export { app }
