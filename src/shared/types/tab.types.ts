import { ParseKeys } from "i18next"

import { RoutesPaths } from "@shared/config/routes"

export type TabItem = ReadonlyArray<{
	readonly id: string
	readonly to: string
	readonly label: ParseKeys
}>

export const userTabs = (userId: number): TabItem => [
	{
		id: "1",
		to: `${RoutesPaths.USERS}/${userId}`,
		label: "user.profile",
	},
	{
		id: "2",
		to: `${RoutesPaths.USERS}/${userId}${RoutesPaths.SKILLS}`,
		label: "user.skills",
	},
	{
		id: "3",
		to: `${RoutesPaths.USERS}/${userId}${RoutesPaths.LANGUAGES}`,
		label: "user.languages",
	},
]
