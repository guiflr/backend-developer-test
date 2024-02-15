import supertest from 'supertest'
import { app } from '../src/shared/app'
import db from '../src/config/database/knex/connection'

describe('UpdateJobHttp', () => {
  afterAll(async () => {
    await db.destroy()
  })

  test('Should retturn 400 if uuid is invalid', async () => {
    const id = 'my-id'
    const response = await supertest(app).delete(`/jobs/${id}`)

    expect(response.status).toEqual(400)
    expect(response.body).toEqual({
      message: 'Invalid or missing param',
      error: 'invalid job id',
      status: 400
    })
  })

  test('Should return 200 if job data is valid and uuid', async () => {
    const id = 'bc7e9aca-a47c-4de2-b4e5-99223353a8b1'
    const response = await supertest(app)
      .delete(`/jobs/${id}`)

    expect(response.status).toEqual(200)
  })
})
