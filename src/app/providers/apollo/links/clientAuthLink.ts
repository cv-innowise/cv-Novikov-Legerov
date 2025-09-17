import { SetContextLink } from "@apollo/client/link/context"
import { getAccessToken } from "@features/auth/model/authService"

export const clientAuthLink = new SetContextLink(async (prevContext, operation) => {
		let token
		if (typeof window === "undefined") {
			let { cookies } = await import("next/headers")
			const myCookies = await cookies()
			token = myCookies.get("access_token")?.value
		} else {
			token = await getAccessToken()
		}

		return {
			headers: {
				...prevContext.headers,
				authorization: token ? `Bearer ${token}` : "",
			},
		}
	},
)
