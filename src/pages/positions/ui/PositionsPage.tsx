import { Metadata } from "next"

import { query } from "@app/providers/apollo/ApolloClient"
import {
	POSITIONS,
	positionsHeadCells,
	PositionsResult,
	PositionsRow,
} from "@entities/positions"
import { BasicTable } from "@widgets/table"

export const metadata: Metadata = {
	title: "Positions Page",
	description: "List of all positions",
}

const PositionsPage = async () => {
	const { data } = await query<PositionsResult>({ query: POSITIONS })

	return (
		<BasicTable
			data={data?.positions || []}
			headCells={positionsHeadCells}
			RowComponent={PositionsRow}
		/>
	)
}

export default PositionsPage
