'use client'

import { Suspense } from "react"

import { Box } from "@mui/material"
import { useParams } from "next/navigation"

import { useCv } from "@entities/cv/hooks/useCv"
import { CVForm } from "@features/cvForm/ui/CVForm"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"
import Loader from "@shared/ui/loader"
import { styles } from "./CVDetails.styles"
import { RoutesPaths } from "@shared/config"
import { useBreadcrumbs } from "@shared/hooks"
import { BreadcrumbIconType } from "@shared/const"

const CVDetails = () => {
	const params = useParams<{ id: string }>()
	const id = params?.id as string

	const { cv, error } = useCv(id)

	useErrorNotification([error])

	useBreadcrumbs({
		path: `${RoutesPaths.CVS}/${cv.id}`,
		text: cv.name
	})

	return (
		<Box sx={styles.container}>
			<CVForm mode="update" cv={cv} />
		</Box>
	)
}

export const CVDetailsSuspense = () => {
	return (
		<Suspense fallback={<Loader />}>
			<CVDetails />
		</Suspense>
	)
}
