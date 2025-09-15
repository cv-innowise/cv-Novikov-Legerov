import { RoutesPaths } from "@shared/config"
import { TabItem } from "@shared/types"

export const userTabs = (userId: string): TabItem => [
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
