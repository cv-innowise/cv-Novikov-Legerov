import { AuthResult } from "cv-graphql"
import { isTokenExpired } from "@shared/lib/tokenService"
import {
	getAccessTokenClientSide,
	getRefreshTokenClientSide,
	setAccessTokenClientSide,
	setTokens,
} from "@shared/model/authStorage"
import { AppDispatch } from "@app/providers/store/store"
import { userAction } from "@entities/user"

export const successAuth = ({
	access_token,
	refresh_token,
	user,
}: AuthResult, dispatch: AppDispatch) => {
	setTokens(access_token, refresh_token)
	dispatch(userAction.setUser(user))
}

export const updateTokenRequest = async (refresh_token: string | undefined) => {
	if (!refresh_token) return { access_token: "" }
	const res = await fetch("https://cv-project-js.inno.ws/api/graphql", {
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
	const newAccessToken = data.data.updateToken.access_token

	return newAccessToken
}

export const getAccessToken = async (): Promise<string | undefined> => {
	const access_token = getAccessTokenClientSide();
	const refresh_token = getRefreshTokenClientSide();

	if (isTokenExpired(access_token) && !isTokenExpired(refresh_token)) {
		const newAccessToken = await updateTokenRequest(refresh_token)
		setAccessTokenClientSide(newAccessToken)
		return newAccessToken
	}

	return access_token
}
