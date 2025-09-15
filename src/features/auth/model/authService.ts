import { AuthResult } from "cv-graphql"

import { isTokenExpired } from "@shared/lib/tokenService"
import {
	getAccessTokenClientSide,
	getRefreshTokenClientSide,
	removeSession,
	setAccessTokenClientSide,
	setTokens,
	setSession,
} from "@shared/model/authStorage"

export const successAuth = ({
	access_token,
	refresh_token,
	user,
}: AuthResult) => {
	setTokens(access_token, refresh_token)
	setSession(user.id, user.email, user.role)
}

export const logout = () => {
	setTokens("", "")
	removeSession()
}

const updateTokenRequest = async (refresh_token: string | undefined) => {
	if (!refresh_token) return { access_token: "", refresh_token: "" }
	const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL!, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${refresh_token}`,
		},
		body: JSON.stringify({
			query: `
                mutation UpdateToken {
                  updateToken {
                    access_token
                    refresh_token
                  }
                }
              `,
		}),
	})

	const data = await res.json()
	return data.data.updateToken.access_token
}

export const getAccessToken = async (): Promise<string | undefined> => {
	const isServer = typeof window === "undefined";
	let getAccessTokenFn: () => Promise<string | undefined> | string | undefined;
	let getRefreshTokenFn: () => Promise<string | undefined> | string | undefined;
	let setAccessTokenFn: (token: string) => Promise<void> | void;

	if (isServer) {
		const {
			getAccessTokenServerSide,
			getRefreshTokenServerSide,
			setAccessTokenServerSide,
		} = await import("@shared/lib/serverSideCookiesService")
		getAccessTokenFn = getAccessTokenServerSide
		getRefreshTokenFn = getRefreshTokenServerSide
		setAccessTokenFn = setAccessTokenServerSide
	} else {
		getAccessTokenFn = getAccessTokenClientSide
		getRefreshTokenFn = getRefreshTokenClientSide
		setAccessTokenFn = setAccessTokenClientSide
	}

	const access_token = await getAccessTokenFn();
	const refresh_token = await getRefreshTokenFn();

	if (isTokenExpired(access_token) && !isTokenExpired(refresh_token)) {
		const newAccessToken = await updateTokenRequest(refresh_token);
		await setAccessTokenFn(newAccessToken);
		return newAccessToken;
	}

	return access_token;
}
