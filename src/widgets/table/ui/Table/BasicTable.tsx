"use client"

import { useMemo, useState } from "react"

import { Table, TableContainer } from "@mui/material"

import { SortOrder } from "@widgets/table/const/sort.const"

import { TableBody } from "../TableBody/TableBody"
import { TableHeader } from "../TableHeader/TableHeader"
import { BasicTableProps } from "./BasicTable.props"

export function BasicTable<T extends { id: string }>({
	headCells,
	data,
	RowComponent,
}: BasicTableProps<T>) {
	const [order, setOrder] = useState<SortOrder>(SortOrder.Asc)
	const [orderBy, setOrderBy] = useState<string>("")

	const handleSort = (property: string) => {
		const isAsc = orderBy === property && order === SortOrder.Asc
		setOrder(isAsc ? SortOrder.Desc : SortOrder.Asc)
		setOrderBy(property)
	}

	const sortedData = useMemo(() => {
		if (!orderBy) return data

		const headCell = headCells.find((h) => h.id === orderBy)
		if (!headCell) return data

		return [...data].sort((a, b) => {
			const aValue = headCell.getValue(a)
			const bValue = headCell.getValue(b)

			if (aValue == null) return 1
			if (bValue == null) return -1

			if (aValue < bValue) return order === SortOrder.Asc ? -1 : 1
			if (aValue > bValue) return order === SortOrder.Asc ? 1 : -1
			return 0
		})
	}, [data, order, orderBy])

	return (
		<TableContainer>
			<Table stickyHeader>
				<TableHeader
					headCells={headCells}
					order={order}
					orderBy={orderBy}
					onRequestSort={handleSort}
				/>
				<TableBody data={sortedData} RowComponent={RowComponent} />
			</Table>
		</TableContainer>
	)
}
