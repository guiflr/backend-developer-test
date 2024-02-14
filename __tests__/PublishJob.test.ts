import supertest from 'supertest'
import db from '../src/config/database/knex/connection'
import { app } from '../src/shared/app'
import { jobData } from './factory'

describe('PublishJob', () => {
  afterAll(async () => {
    await db.destroy()
  })

  test('Should retturn 400 if uuid is invalid', async () => {
    const id = 'my-id'
    const response = await supertest(app)
      .put(`/jobs/${id}/publish`)
      .send(jobData)

    expect(response.status).toEqual(400)
    expect(response.body).toEqual({
      message: 'Invalid or missing param',
      error: 'invalid job ID',
      status: 400
    })
  })

  test('Should retturn 400 if job is not founded', async () => {
    const id = '281c220f-3d36-4c11-a2f2-d6255d0d225j'
    const response = await supertest(app)
      .put(`/jobs/${id}/publish`)
      .send(jobData)

    expect(response.status).toEqual(400)
    expect(response.body).toEqual({
      message: 'Invalid or missing param',
      error: 'invalid job ID',
      status: 400
    })
  })
})
