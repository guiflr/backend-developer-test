import supertest from 'supertest'
import { app } from '../src/shared/app'
import { jobData } from './factory'

describe('CreateJobHttp', () => {
  test('Should create job', async () => {
    const response = await supertest(app).post('/jobs').send(jobData).expect(201)

    expect(response.status).toEqual(201)
  })
})
