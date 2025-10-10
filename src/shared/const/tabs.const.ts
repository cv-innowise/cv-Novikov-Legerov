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

export const cvTabs = (cvId: string): TabItem => [
	{
		id: "1",
		to: `${RoutesPaths.CVS}/${cvId}`,
		label: "cv.details",
	},
	{
		id: "2",
		to: `${RoutesPaths.CVS}/${cvId}${RoutesPaths.SKILLS}`,	
		label: "cv.skills",
	},
	{
		id: "3",
		to: `${RoutesPaths.CVS}/${cvId}${RoutesPaths.PROJECTS}`,
		label: "cv.projects",
	},
	{
		id: "4",
		to: `${RoutesPaths.CVS}/${cvId}${RoutesPaths.PREVIEW}`,
		label: "cv.preview",
	},
]