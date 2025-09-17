import { MouseEventHandler } from "react"

import Session from "@shared/types/session"

export interface UserProfileProps {
	session: Session
	onClick?: MouseEventHandler<HTMLElement>
}
