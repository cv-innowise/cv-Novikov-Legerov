"use client"

import { Skill } from "cv-graphql"

import { HeadCell } from "@shared/types"

export const skillsHeadCells: HeadCell<Skill>[] = [
	{
		id: "1",
		label: "skillsTable.name",
		getValue: (row) => row.name,
	},
	{
		id: "2",
		label: "skillsTable.category",
		getValue: (row) => row.category_name,
	},
]
