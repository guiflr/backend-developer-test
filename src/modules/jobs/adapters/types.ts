export type ContentMessage = {
    isHarmful: boolean
    notice?: string
}

type Message = {
    role: string
    content: string
}

type Choice  = {
    index: number
    message: Message
}

export type GptResponse = {
    choices: Choice[]
}