import BusinessIcon from "@mui/icons-material/Business"
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined"
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
		to: RoutesPaths.PROJECTS,
		label: "navigation.projects",
		icon: <FolderCopyOutlinedIcon />,
	},
	{
		id: "3",
		to: RoutesPaths.CVS,
		label: "navigation.cvs",
		icon: <CVSIcon />,
	},
	{
		id: "4",
		to: RoutesPaths.DEPARTMENTS,
		label: "navigation.departments",
		icon: <BusinessIcon />,
	},
	{
		id: "5",
		to: RoutesPaths.POSITIONS,
		label: "navigation.positions",
		icon: <WorkOutlineIcon />,
	},
	{
		id: "6",
		to: RoutesPaths.SKILLS,
		label: "navigation.skills",
		icon: <SkillsIcon />,
	},
	{
		id: "7",
		to: RoutesPaths.LANGUAGES,
		label: "navigation.languages",
		icon: <LanguagesIcon />,
	},
]
