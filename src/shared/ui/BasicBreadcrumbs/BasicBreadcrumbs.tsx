"use client"

import { FC, useMemo } from "react"

import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useAppSelector } from "@app/providers/store/hooks/hooks"
import { BREADCRUMB_ICONS, BreadcrumbIconType } from "@shared/const"
import { navItems } from "@widgets/sidebar/const/navItems.const"

import { NavigationNextIcon } from "../icons"
import { styles } from "./BasicBreadcrumbs.styles"

export const BasicBreadcrumbs: FC = () => {
	const pathname = usePathname()
	const config = useAppSelector((state) => state.breadcrumbs.config)
	const t = useTranslations()

	const links = useMemo(() => {
		const segments = (pathname ?? "").split("/").filter(Boolean)

		return segments.map((segment, index, array) => {
			const path = "/" + array.slice(0, index + 1).join("/")
			let replacement = config.find((item) => item.path === path)

			if (!replacement && index === 0) {
				const navItem = navItems.find((item) => item.to === path)
				if (navItem) {
					replacement = {
						path,
						text: t(navItem.label),
					}
				}
			}

			return {
				to: path,
				text:
					replacement?.text ||
					segment.charAt(0).toUpperCase() + segment.slice(1),
				icon: replacement?.icon,
			}
		})
	}, [pathname, config])

	return (
		<Breadcrumbs separator={<NavigationNextIcon />} sx={styles.breadcrumbs}>
			{links.map((link) => (
				<MuiLink
					sx={styles.link}
					key={link.to}
					component={Link}
					href={link.to}
					underline="hover"
				>
					{BREADCRUMB_ICONS[link.icon as BreadcrumbIconType]}
					{link.text}
				</MuiLink>
			))}
		</Breadcrumbs>
	)
}
