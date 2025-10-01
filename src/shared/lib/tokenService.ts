import { jwtDecode } from "jwt-decode"

import { UserState } from "@entities/user"

interface JWTPayload {
	exp?: number
	[key: string]: any
}

export function isTokenExpired(token: string | undefined): boolean {
	try {
		if (!token) return true
		const decoded = jwtDecode<JWTPayload>(token)
		if (!decoded.exp) return true
		return Date.now() >= decoded.exp * 1000
	} catch {
		return true
	}
}

export const getAuthUserFromToken = (token: string | undefined): UserState => {
	const nullUser = {
		id: null,
		role: null,
		email: null,
	}
	try {
		if (!token) return nullUser
		const decoded = jwtDecode<JWTPayload>(token)
		return {
			id: decoded.sub,
			role: decoded.role,
			email: decoded.email
		}
	} catch {
		return nullUser
	}
}
