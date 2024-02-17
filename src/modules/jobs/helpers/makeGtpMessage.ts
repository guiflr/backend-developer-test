export const user = (title: string, description: string) => `Eu preciso saber se este titulo: ${title}; e esta descrição: ${description}; é um conteúdo prejudical?`

export const systemMessage = 'You are a helpful assistant designed to output JSON. For harmful content returns a boolean value into a isHarmful key and an explanation into a notice key'

export const gptRequestBody = (userContent: string, systemContent: string) => {
    return {
        model: "gpt-3.5-turbo-0125",
        response_format: {
            type: "json_object"
        },
        messages: [
            {
                role: "system",
                content: systemContent
            },
            {
                role: "user",
                content: userContent
            }
        ]
    }
}