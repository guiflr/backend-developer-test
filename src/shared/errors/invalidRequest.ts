export function invalidRequest(error: string) {
    return { message: 'Invalid or missing param', error, status: 400 };
  }