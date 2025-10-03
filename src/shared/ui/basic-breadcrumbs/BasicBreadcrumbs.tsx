"use client"

import { FC } from "react"

import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavigationNextIcon } from "../icons"
import { styles } from "./BasicBreadcrumbs.styles"

export const BasicBreadcrumbs: FC = () => {
	const pathname = usePathname()

	const links = (pathname ?? "")
		.split("/")
		.filter(Boolean)
		.map((segment, index, arr) => {
			const path = `/${arr.slice(0, index + 1).join("/")}`
			const label = segment.charAt(0).toUpperCase() + segment.slice(1)
			const onlyOne = arr.length === 1
			const isLast = index === arr.length - 1
			return {
				to: path,
				label,
				isLast,
				onlyOne,
			}
		})

	return (
		<Breadcrumbs
			separator={<NavigationNextIcon />}
			sx={styles.breadcrumbs}
		>
			{links.map((link) =>
				link.isLast || link.onlyOne ? (
					<Typography
						sx={{
							...styles.text,
							color: link.onlyOne ? "text.secondary" : "primary.main",
						}}
						key={link.to}
					>
						{link.label}
					</Typography>
				) : (
					<MuiLink
						sx={styles.link}
						key={link.to}
						component={Link}
						href={link.to}
						underline="hover"
					>
						{link.label}
					</MuiLink>
				),
			)}
		</Breadcrumbs>
	)
}
