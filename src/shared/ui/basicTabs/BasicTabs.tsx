"use client"

import { FC } from "react"

import { Tab, Tabs } from "@mui/material"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { BasicTabsProps } from "./BasicTabs.props"

export const BasicTabs: FC<BasicTabsProps> = ({ tabs }) => {
	const t = useTranslations()

	const pathname = usePathname()

	const currentIndex = tabs.findIndex(({ to }) => pathname === to)

	return (
		<Tabs value={currentIndex !== -1 ? currentIndex : 0}>
			{tabs.map(({ id, label, to }) => (
				<Tab
					component={Link}
					href={to}
					key={id}
					label={t(label)}
					sx={{ padding: "16px" }}
				/>
			))}
		</Tabs>
	)
}
