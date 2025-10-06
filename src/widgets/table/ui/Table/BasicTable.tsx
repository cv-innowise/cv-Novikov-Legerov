"use client"

import { useMemo, useState } from "react"
import { useForm } from "react-hook-form"

import { Add } from "@mui/icons-material"
import { Button, Stack, Table, TableContainer, Typography } from "@mui/material"
import { useTranslations } from "next-intl"

import { useDebounce } from "@shared/hooks"
import { SearchInput } from "@shared/ui/SearchInput"
import { SortOrder } from "@widgets/table/const/sort.const"

import { TableBody } from "../TableBody/TableBody"
import { TableHeader } from "../TableHeader/TableHeader"
import { BasicTableProps } from "./BasicTable.props"
import { styles } from "./BasicTable.styles"

export function BasicTable<T extends { id: string }>({
	headCells,
	data,
	RowComponent,
	addItemHandle,
	addButtonText,
}: BasicTableProps<T>) {
	const [order, setOrder] = useState<SortOrder>(SortOrder.Asc)
	const [orderBy, setOrderBy] = useState<string>("")
	const t = useTranslations()
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
		<>
			<Stack direction="row" justifyContent="space-between" gap={"60px"}>
				<SearchInput control={control} name="search" placeholder="Search" />
				{addItemHandle && addButtonText && (
					<Button sx={styles.button} onClick={addItemHandle}>
						<Stack
							direction="row"
							justifyContent="center"
							alignItems="center"
							gap="8px"
						>
							<Add />
							<Typography sx={styles.buttonText}>{t(addButtonText)}</Typography>
						</Stack>
					</Button>
				)}
			</Stack>
			<TableContainer sx={{ overflow: "visible" }}>
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
		</>
	)
}
