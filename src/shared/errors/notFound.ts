export function notFound (error: string) {
  return { message: error, error: '', status: 404 }
}
