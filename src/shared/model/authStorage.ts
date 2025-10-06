"use client"

function setCookie(name: string, value: string | object, days = 7) {
	const expires = new Date(Date.now() + days * 864e5).toUTCString()
	const cookieValue = typeof value === "object" ? JSON.stringify(value) : value
	document.cookie = `${name}=${encodeURIComponent(cookieValue)}; expires=${expires}; path=/`
}

const getCookie = (name: string): object | string | undefined => {
	if (typeof window === "undefined") {
		return undefined
	}
	const cookieRow = document.cookie
		.split("; ")
		.find((row) => row.startsWith(name + "="))

	if (!cookieRow) return undefined

	const cookieValue = decodeURIComponent(cookieRow.split("=")[1])

	try {
		return JSON.parse(cookieValue)
	} catch {
		return cookieValue
	}
}

function deleteCookie(name: string) {
	document.cookie = `${name}=; max-age=0; path=/`
}

export function getAccessTokenClientSide() {
	return getCookie("access_token") as string | undefined
}

export function setAccessTokenClientSide(access_token: string) {
	setCookie("access_token", access_token)
}

export function getRefreshTokenClientSide() {
	return getCookie("refresh_token") as string | undefined
}

export function setTokens(access_token: string, refresh_token: string) {
	setCookie("access_token", access_token)
	setCookie("refresh_token", refresh_token)
}

export function clearTokens() {
	deleteCookie("access_token")
	deleteCookie("refresh_token")
}