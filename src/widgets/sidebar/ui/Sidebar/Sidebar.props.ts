import { ReactNode } from "react"

import Session from "@shared/types/session"

export interface SidebarProps {
	children?: ReactNode
	session: Session
}
