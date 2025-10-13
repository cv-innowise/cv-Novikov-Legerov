"use client"

import { User } from "cv-graphql"

import { HeadCell } from "@shared/types"

export const userHeadCells: HeadCell<User>[] = [
	{
		id: "0",
		label: "",
		getValue: (row) => "",
	},
	{
		id: "1",
		label: "table.firstName",
		getValue: (row) => row.profile.first_name,
	},
	{
		id: "2",
		label: "table.lastName",
		getValue: (row) => row.profile.last_name,
	},
	{
		id: "3",
		label: "table.email",
		getValue: (row) => row.email,
	},
	{
		id: "4",
		label: "table.department",
		getValue: (row) => row.department?.name,
	},
	{
		id: "5",
		label: "table.position",
		getValue: (row) => row.position?.name,
	},
]
