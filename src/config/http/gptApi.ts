import axios from 'axios'

const baseURL = process.env.OPENAPI_URL as string
const token = process.env.OPENAI_API_KEY as string

export const gptApi = axios.create({ baseURL, headers: { Authorization: `Bearer ${token}`, "Content-Type": 'application/json' } })