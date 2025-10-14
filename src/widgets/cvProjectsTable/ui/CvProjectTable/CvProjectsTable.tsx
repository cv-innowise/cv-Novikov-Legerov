"use client"

import { Suspense } from "react"

import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"

import { useCv } from "@entities/cv/hooks/useCv"
import { useCvProjectDialog } from "@features/projectForm/hooks/useCvProjectFormDialog"
import { RoutesPaths } from "@shared/config"
import { useBreadcrumbs } from "@shared/hooks"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"
import Loader from "@shared/ui/loader"
import { projectHeadCells } from "@widgets/cvProjectsTable/const/projectHeadCells"
import { useProjects } from "@widgets/cvProjectsTable/hooks/useProjects"
import { BasicTable } from "@widgets/table"

import { CvProjectRow } from "../CvProjectRow/CvProjectRow"

const CvProjectsTable = () => {
	const params = useParams<{ id: string }>()
	const id = params?.id as string

	const t = useTranslations()

	const { cv, error: cvError } = useCv(id)
	const { projects, error: projectsError } = useProjects()
	const filteredProjects = projects.filter(
		(pr) => !cv.projects?.find((cvPr) => cvPr.project.id === pr.id),
	)

	const addCvProject = useCvProjectDialog({
		mode: "add",
		projects: filteredProjects,
	})

	useBreadcrumbs([
		{
			path: `${RoutesPaths.CVS}/${cv.id}`,
			text: cv.name,
		},
		{
			path: `${RoutesPaths.CVS}/${cv.id}${RoutesPaths.PROJECTS}`,
			text: t("navigation.projects"),
		},
	])

	useErrorNotification([cvError, projectsError])

	return (
		<BasicTable
			data={cv.projects || []}
			RowComponent={CvProjectRow}
			headCells={projectHeadCells}
			addItemHandle={addCvProject}
			addButtonText="Add project"
		/>
	)
}

export const CvProjectsTableSuspense = () => {
	return (
		<Suspense fallback={<Loader />}>
			<CvProjectsTable />
		</Suspense>
	)
}
