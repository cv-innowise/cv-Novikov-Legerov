"use client"

import { FC } from "react"

import { KeyboardArrowRight } from "@mui/icons-material"
import { Avatar, IconButton, TableCell, TableRow } from "@mui/material"

import { UserItemProps } from "./UserItem.props"

export const UserItem: FC<UserItemProps> = ({ row: user }) => {
	return (
		<TableRow>
			<TableCell>
				<Avatar src={user.profile.avatar || ""}>
					{user.profile.full_name?.at(0) || user.email.at(0)}
				</Avatar>
			</TableCell>
			<TableCell>{user.profile.first_name}</TableCell>
			<TableCell>{user.profile.last_name}</TableCell>
			<TableCell>{user.email}</TableCell>
			<TableCell>{user.department?.name}</TableCell>
			<TableCell>{user.position?.name}</TableCell>
			<TableCell>
				<IconButton>
					<KeyboardArrowRight />
				</IconButton>
			</TableCell>
		</TableRow>
	)
}
