import supertest from 'supertest'
import { app } from '../src/shared/app'
import db from '../src/config/database/knex/connection'

describe('ArchiveJobHttp', () => {
  afterAll(async () => {
    await db.destroy()
  })

  test('Should return 400 if uuid is invalid', async () => {
    const id = 'my-id'
    const response = await supertest(app).put(`/jobs/${id}/archive`)

    expect(response.status).toEqual(400)
    expect(response.body).toEqual({
      message: 'Invalid or missing param',
      error: 'invalid job id',
      status: 400
    })
  })

  test('Should return 200 if job was updated to archived status', async () => {
    const id = 'eb9957b4-58ae-4966-a399-9170c250377c'
    const response = await supertest(app)
      .put(`/jobs/${id}/archive`)

    expect(response.status).toEqual(200)
  })
})
