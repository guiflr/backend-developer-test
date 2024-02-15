import supertest from 'supertest'
import { app } from '../src/shared/app'
import { jobData } from './factory'
import db from '../src/config/database/knex/connection'

describe('UpdateJobHttp', () => {
  afterAll(async () => {
    await db.destroy()
  })

  test('Should retturn 400 if uuid is invalid', async () => {
    const id = 'my-id'
    const response = await supertest(app).put(`/jobs/${id}`).send(jobData)

    expect(response.status).toEqual(400)
    expect(response.body).toEqual({
      message: 'Invalid or missing param',
      error: 'invalid job id',
      status: 400
    })
  })

  test('Should return 400 if job data isn invalid', async () => {
    const id = '7b87f30e-5c95-403d-880b-8f4e32b7a75c'
    const response = await supertest(app).put(`/jobs/${id}`).send({})

    expect(response.status).toEqual(400)
    expect(response.body).toEqual({
      message: 'Invalid or missing param',
      error: ['title required', 'description required', 'location required'],
      status: 400
    })
  })

  test('Should return 200 if job data is valid and uuid', async () => {
    const id = 'bc7e9aca-a47c-4de2-b4e5-99223353a8b1'
    const response = await supertest(app)
      .put(`/jobs/${id}`)
      .send({
        title: 'new-title',
        description: 'new description',
        location: 'SP',        
      })

    expect(response.status).toEqual(200)
  })
})
