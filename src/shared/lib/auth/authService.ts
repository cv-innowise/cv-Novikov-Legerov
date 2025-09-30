import "server-only"

import { getSession } from "../serverSideCookiesService"

export const getUserAccessInfo = async (paramsUserId: string) => {
	let userId
	let isDisabled: boolean
	const session = await getSession()
	const sessionUserId = session.id

	paramsUserId ? (userId = paramsUserId) : (userId = sessionUserId)

	if (session.role === "Admin" || userId === sessionUserId) {
		isDisabled = false
	} else isDisabled = true

	return { userId, isDisabled }
}
