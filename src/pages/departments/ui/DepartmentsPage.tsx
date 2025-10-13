import { Metadata } from "next"

import { query } from "@app/providers/apollo/ApolloClient"
import {
	DEPARTMENTS,
	departmentsHeadCells,
	DepartmentsResult,
	DepartmentsRow,
} from "@entities/departments"
import { BasicTable } from "@widgets/table"

export const metadata: Metadata = {
	title: "Departments Page",
	description: "List of all depaertments",
}

const DepartmentsPage = async () => {
	const { data } = await query<DepartmentsResult>({ query: DEPARTMENTS })

	return (
		<BasicTable
			RowComponent={DepartmentsRow}
			data={data?.departments || []}
			headCells={departmentsHeadCells}
		/>
	)
}

export default DepartmentsPage
