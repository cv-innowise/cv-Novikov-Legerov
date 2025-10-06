import { ReactNode } from "react"

import PersonOutlineIcon from "@mui/icons-material/PersonOutline"

export enum BreadcrumbIconType {
	Person = "Person",
}

export const BREADCRUMB_ICONS: Record<BreadcrumbIconType, ReactNode> = {
	[BreadcrumbIconType.Person]: <PersonOutlineIcon />,
}
