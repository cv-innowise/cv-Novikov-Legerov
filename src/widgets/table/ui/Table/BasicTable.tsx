"use client"

import { useMemo, useState } from "react"
import { useForm } from "react-hook-form"

import { Table, TableContainer } from "@mui/material"

import { useDebounce } from "@shared/hooks"
import { SearchInput } from "@shared/ui/SearchInput"
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

	const { control, watch, reset } = useForm({ defaultValues: { search: "" } })

	const search = watch("search")

	const debouncedSearch = useDebounce(search, 300)

	const filteredData = useMemo(() => {
		if (!debouncedSearch) return data
		const lowerSearch = debouncedSearch.toLowerCase()

		return data.filter((item) =>
			headCells.some((headCell) => {
				const value = headCell.getValue(item)
				return value?.toString().toLowerCase().includes(lowerSearch)
			}),
		)
	}, [debouncedSearch, data, headCells])

	const sortedData = useMemo(() => {
		if (!orderBy) return filteredData
		const headCell = headCells.find((h) => h.id === orderBy)
		if (!headCell) return filteredData

		return [...filteredData].sort((a, b) => {
			const aValue = headCell.getValue(a)
			const bValue = headCell.getValue(b)
			if (aValue == null) return 1
			if (bValue == null) return -1
			if (aValue < bValue) return order === SortOrder.Asc ? -1 : 1
			if (aValue > bValue) return order === SortOrder.Asc ? 1 : -1
			return 0
		})
	}, [filteredData, order, orderBy, headCells])

	return (
		<TableContainer>
			<SearchInput control={control} name="search" placeholder="Search" />
			<Table stickyHeader>
				<TableHeader
					headCells={headCells}
					order={order}
					orderBy={orderBy}
					onRequestSort={handleSort}
				/>

				<TableBody
					onResetSearch={reset}
					data={sortedData}
					RowComponent={RowComponent}
				/>
			</Table>
		</TableContainer>
	)
}
