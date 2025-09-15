import { ReactNode } from "react"

import { ParseKeys } from "i18next"

import { RoutesPaths } from "@shared/config"

export type NavItems = ReadonlyArray<{
	readonly id: string
	readonly to: RoutesPaths
	readonly icon: ReactNode
	readonly label: ParseKeys
}>
