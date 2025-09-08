import { RoutesPaths } from "@shared/config/routes"
import {
	CVSIcon,
	EmployessIcon,
	LanguagesIcon,
	SkillsIcon,
} from "@shared/ui/icons"

import { NavItems } from "./nav.types"

export const navItems: NavItems = [
	{
		id: "1",
		to: RoutesPaths.USERS,
		label: "navigation.employees",
		icon: <EmployessIcon />,
	},
	{
		id: "2",
		to: RoutesPaths.SKILLS,
		label: "navigation.skills",
		icon: <SkillsIcon />,
	},
	{
		id: "3",
		to: RoutesPaths.LANGUAGES,
		label: "navigation.languages",
		icon: <LanguagesIcon />,
	},
	{
		id: "4",
		to: RoutesPaths.CVS,
		label: "navigation.cvs",
		icon: <CVSIcon />,
	},
]
