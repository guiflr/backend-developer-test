import { OpenAPIJobModerator } from "../src/modules/jobs/adapters/OpenAPIJobModerator"

describe("OpenAPIJobModerator", () => {
    test("Should return harmful content", async () => {
        const openApi = new OpenAPIJobModerator()

        const response = await openApi.moderate('Vaga nodeJS', 'vaga para nodejs senior, mas precisamos de pessoas católicas para a vaga')

        expect(response.isHarmful).toBe(true)
        expect(response.note).toBeDefined()
    })

    test("Should return not harmful content", async () => {
        const openApi = new OpenAPIJobModerator()

        const response = await openApi.moderate('Vaga nodeJS', 'vaga para nodejs senior, mas precisamos de pessoas com experiencia para a vaga')

        expect(response.isHarmful).toBe(false)
        expect(response.note).not.toBeDefined()
    })
})