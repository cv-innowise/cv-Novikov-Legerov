"use client"

import { Project } from "cv-graphql"

import { HeadCell } from "@shared/types"

export const projectsHeadCells: HeadCell<Project>[] = [
	{
		id: "1",
		label: "projectsTable.name",
		getValue: (row) => row.name,
	},
	{
		id: "2",
		label: "projectsTable.internalName",
		getValue: (row) => row.internal_name,
	},
	{
		id: "3",
		label: "projectsTable.domain",
		getValue: (row) => row.domain,
		disappearance: "sm",
	},
	{
		id: "4",
		label: "projectsTable.startDate",
		getValue: (row) => row.start_date,
		disappearance: "md",
	},
	{
		id: "5",
		label: "projectsTable.endDate",
		getValue: (row) => row.end_date,
		disappearance: "md",
	},
]
