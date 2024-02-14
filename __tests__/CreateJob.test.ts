import supertest from 'supertest'
import { app } from '../src/shared/app'
import { jobData } from './factory'
import db from '../src/config/database/knex/connection'

describe('CreateJobHttp', () => {
  afterAll(async () => {
    await db.destroy()
  })
  test('Should create job', async () => {
    const response = await supertest(app).post('/jobs').send(jobData)

    expect(response.status).toEqual(201)
  })
})
