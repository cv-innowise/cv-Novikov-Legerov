"use client"

import { Position } from "cv-graphql"

import { HeadCell } from "@shared/types"

export const positionsHeadCells: HeadCell<Position>[] = [
	{
		id: "1",
		label: "positionsTable.name",
		getValue: (row) => row.name,
	},
]
