import BusinessIcon from "@mui/icons-material/Business"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"

import { RoutesPaths } from "@shared/config"
import {
	CVSIcon,
	EmployessIcon,
	LanguagesIcon,
	SkillsIcon,
} from "@shared/ui/icons"

import { NavItems } from "../model/nav.types"

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
	{
		id: "5",
		to: RoutesPaths.DEPARTMENTS,
		label: "navigation.departments",
		icon: <BusinessIcon />,
	},
	{
		id: "6",
		to: RoutesPaths.POSITIONS,
		label: "navigation.positions",
		icon: <WorkOutlineIcon />,
	},
]
