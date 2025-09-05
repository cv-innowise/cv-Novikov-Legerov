import { FC } from "react"

import { List } from "@mui/material"
import { useTranslations } from "next-intl"

import { NavItem } from "../NavItem/NavItem"
import { NavListProps } from "./NavList.props"
import { navListStyles } from "./NavList.styles"

export const NavList: FC<NavListProps> = ({ items }) => {
	const t = useTranslations()

	return (
		<List sx={navListStyles.list}>
			{items.map(({ icon, label, to, id }) => (
				<NavItem id={id} key={id} to={to} label={t(label)} icon={icon} />
			))}
		</List>
	)
}
