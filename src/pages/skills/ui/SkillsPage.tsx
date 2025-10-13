import { Metadata } from "next"

import { query } from "@app/providers/apollo/ApolloClient"
import {
	SKILLS,
	skillsHeadCells,
	SkillsResult,
	SkillsRow,
} from "@entities/skills"
import { BasicTable } from "@widgets/table"

export const metadata: Metadata = {
	title: "Skills Page",
	description: "List of all skills",
}

const SkillsPage = async () => {
	const { data } = await query<SkillsResult>({ query: SKILLS })

	return (
		<BasicTable
			data={data?.skills || []}
			headCells={skillsHeadCells}
			RowComponent={SkillsRow}
		/>
	)
}

export default SkillsPage
