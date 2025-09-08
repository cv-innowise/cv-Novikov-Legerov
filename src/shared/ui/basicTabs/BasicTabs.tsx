"use client"

import { FC, SyntheticEvent, useState } from "react"

import { Tab, Tabs } from "@mui/material"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { TabsProps } from "./BasicTabs.props"

export const BasicTabs: FC<TabsProps> = ({ tabs }) => {
	const t = useTranslations()
	const [value, setValue] = useState(0)

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	const pathname = usePathname()

	const currentIndex = tabs.findIndex(({ to }) => pathname === to)

	return (
		<Tabs
			value={currentIndex !== -1 ? currentIndex : 0}
			onChange={handleChange}
		>
			{tabs.map(({ id, label, to }) => (
				<Tab component={Link} href={to} key={id} label={t(label)} />
			))}
		</Tabs>
	)
}
