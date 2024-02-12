import { ZodJobValidator } from '../src/modules/jobs/adapters/ZodJobValidator'
import { JobCreate } from '../src/modules/jobs/domain/types'
import { jobData } from './factory'

describe('ZodJobValidator', () => {
  const zodJobValidator = new ZodJobValidator()
  test('Should return error', () => {
    const validation = zodJobValidator.validate({} as JobCreate)

    expect(validation.isValid).toBe(false)
    expect(validation.error.length).toEqual(5)
  })

  test('Should return true when it has not error', () => {
    const validation = zodJobValidator.validate(jobData)

    expect(validation.isValid).toBe(true)
    expect(validation.error.length).toEqual(0)
  })
})
