import { Metadata } from "next"

import { query } from "@app/providers/apollo/ApolloClient"
import {
	LANGUAGES,
	LanguagesResult,
	LanguagesRow,
	langualesHeadCells,
} from "@entities/languages"
import { BasicTable } from "@widgets/table"

export const metadata: Metadata = {
	title: "Languages Page",
	description: "List of all languages",
}

const LanguagesPage = async () => {
	const { data } = await query<LanguagesResult>({ query: LANGUAGES })

	return (
		<BasicTable
			RowComponent={LanguagesRow}
			headCells={langualesHeadCells}
			data={data?.languages || []}
		/>
	)
}

export default LanguagesPage
