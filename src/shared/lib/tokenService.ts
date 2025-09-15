import { jwtDecode } from "jwt-decode"

interface JWTPayload {
  exp?: number
  [key: string]: any
}

export function isTokenExpired(token: string | undefined): boolean {
  try {
    if (!token) return true;
    const decoded = jwtDecode<JWTPayload>(token)
    if (!decoded.exp) return true
    return Date.now() >= decoded.exp * 1000
  } catch {
    return true
  }
}