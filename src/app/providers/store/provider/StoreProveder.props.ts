import { ReactNode } from "react"

import { UserState } from "@entities/user"

export interface StoreProviderProps {
	user?: UserState
	children: ReactNode
}
