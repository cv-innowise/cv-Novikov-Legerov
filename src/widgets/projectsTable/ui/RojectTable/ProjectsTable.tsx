"use client"

import { Suspense } from "react"

import { useParams } from "next/navigation"

import { useCv } from "@entities/cv/hooks/useCv"
import { useCVDialog } from "@features/cvForm/hooks/useCVFormDialog"
import { useCvProjectDialog } from "@features/projectForm/hooks/useCvProjectFormDialog"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"
import Loader from "@shared/ui/loader"
import { projectHeadCells } from "@widgets/projectsTable/const/projectHeadCells"
import { useProjects } from "@widgets/projectsTable/hooks/useProjects"
import { BasicTable } from "@widgets/table"

import { ProjectRow } from "../ProjectRow/ProjectRow"

const ProjectsTable = () => {
	const params = useParams<{ id: string }>()
	const id = params?.id as string

	const { cv, error: cvError } = useCv(id)
	const { projects, error: projectsError } = useProjects()

	const filteredProjects = projects.filter(
		(pr) => !cv.projects?.find((cvPr) => cvPr.project.id === pr.id),
	)

	const addCvProject = useCvProjectDialog({
		mode: "add",
		projects: filteredProjects,
	})

	useErrorNotification([cvError, projectsError])

	return (
		<BasicTable
			data={cv.projects || []}
			RowComponent={ProjectRow}
			headCells={projectHeadCells}
			addItemHandle={addCvProject}
			addButtonText="Add project"
		/>
	)
}

export const ProjectsTableSuspense = () => {
	return (
		<Suspense fallback={<Loader />}>
			<ProjectsTable />
		</Suspense>
	)
}
