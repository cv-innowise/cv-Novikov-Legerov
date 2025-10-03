"use client"

import { FC, useMemo } from "react"

import { Box, Breadcrumbs, Link as MuiLink, Typography } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useAppSelector } from "@app/providers/store/hooks/hooks"
import { BREADCRUMB_ICONS } from "@shared/const"

import { NavigationNextIcon } from "../icons"
import { styles } from "./BasicBreadcrumbs.styles"

export const BasicBreadcrumbs: FC = () => {
	const pathname = usePathname()
	const config = useAppSelector((state) => state.breadcrumbs.config)

	const links = useMemo(() => {
		const segments = (pathname ?? "").split("/").filter(Boolean)

		return segments.map((segment, index, array) => {
			const path = "/" + array.slice(0, index + 1).join("/")
			const replacement = config.find((item) => item.path === path)

			return {
				to: path,
				text:
					replacement?.text ||
					segment.charAt(0).toUpperCase() + segment.slice(1),
				icon: replacement?.icon,
				isLast: index === array.length - 1,
				onlyOne: array.length === 1,
			}
		})
	}, [pathname, config])

	return (
		<Breadcrumbs separator={<NavigationNextIcon />} sx={styles.breadcrumbs}>
			{links.map((link) =>
				link.isLast || link.onlyOne ? (
					<Typography
						sx={{
							...styles.text,
							color: link.onlyOne ? "text.secondary" : "primary.main",
						}}
						key={link.to}
					>
						{link.icon && BREADCRUMB_ICONS[link.icon]}
						{link.text}
					</Typography>
				) : (
					<MuiLink
						sx={styles.link}
						key={link.to}
						component={Link}
						href={link.to}
						underline="hover"
					>
						{link.text}
					</MuiLink>
				),
			)}
		</Breadcrumbs>
	)
}
