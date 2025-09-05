import type { ReactNode } from "react"

export interface NavItemProps {
	to: string
	label: string
	icon: ReactNode
	id: string
}
