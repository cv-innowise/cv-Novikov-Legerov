import { query } from "@app/providers/apollo/ApolloClient"
import { PROJECT, ProjectDetails, ProjectResult } from "@entities/project"

import { ProjectPageProps } from "./ProjectPage.props"

const ProjectPage = async ({ params }: ProjectPageProps) => {
	const { id: projectId } = await params

	const { data } = await query<ProjectResult>({
		query: PROJECT,
		variables: { projectId },
	})

	return <ProjectDetails project={data!.project} />
}

export default ProjectPage
