'use client'

import { useParams } from "next/navigation"

import { useCv } from "@entities/cv/hooks/useCv"
import { useCVDialog } from "@features/cvForm/hooks/useCVFormDialog"
import { projectHeadCells } from "@widgets/projectsTable/const/projectHeadCells"
import { BasicTable } from "@widgets/table"

import { ProjectRow } from "../ProjectRow/ProjectRow"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"
import { Suspense } from "react"
import Loader from "@shared/ui/loader"

const ProjectsTable = () => {
	const addCV = useCVDialog({ mode: "add" })
    const params = useParams<{ id: string }>()
    const id = params?.id as string

    const { cv, error } = useCv(id)

    useErrorNotification([error])

	return (
		<BasicTable
			data={cv.projects  || []}
			RowComponent={ProjectRow}
			headCells={projectHeadCells}
			addItemHandle={addCV}
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