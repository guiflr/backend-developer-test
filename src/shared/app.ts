import express from 'express'
import cors from 'cors'

import { companyRoutes } from '../modules/companies/infra/http/routes/companyRoutes'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/companies', companyRoutes)

export { app }
