"use client"

import { Department } from "cv-graphql"

import { HeadCell } from "@shared/types"

export const departmentsHeadCells: HeadCell<Department>[] = [
	{
		id: "1",
		label: "depatmentsTable.name",
		getValue: (row) => row.name,
	},
]
