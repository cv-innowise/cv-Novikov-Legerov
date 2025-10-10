"use client"

import { Language } from "cv-graphql"

import { HeadCell } from "@shared/types"

export const langualesHeadCells: HeadCell<Language>[] = [
	{
		id: "1",
		label: "languagesTable.name",
		getValue: (row) => row.name,
	},
	{
		id: "2",
		label: "languagesTable.nativeName",
		getValue: (row) => row.native_name,
	},
	{
		id: "3",
		label: "languagesTable.iso2",
		getValue: (row) => row.iso2,
	},
]
