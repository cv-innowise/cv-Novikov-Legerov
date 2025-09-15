import { ParseKeys } from "i18next"

export type TabItem = ReadonlyArray<{
	readonly id: string
	readonly to: string
	readonly label: ParseKeys
}>
