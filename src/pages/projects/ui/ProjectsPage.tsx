import { Metadata } from "next"

import { query } from "@app/providers/apollo/ApolloClient"
import {
	PROJECTS,
	projectsHeadCells,
	ProjectsResult,
	ProjectsRow,
} from "@entities/projects"
import { BasicTable } from "@widgets/table"

export const metadata: Metadata = {
	title: "Projects Page",
	description: "List of all projects",
}

const ProjectsPage = async () => {
	const { data } = await query<ProjectsResult>({ query: PROJECTS })

	return (
		<BasicTable
			RowComponent={ProjectsRow}
			headCells={projectsHeadCells}
			data={data?.projects || []}
		/>
	)
}

export default ProjectsPage
