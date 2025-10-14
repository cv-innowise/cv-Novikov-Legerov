"use client"

import { useRef } from "react"

import { Box } from "@mui/material"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"

import { useCv } from "@entities/cv/hooks/useCv"
import { useSkillCategories } from "@features/skills/hooks/useSkillCategories"
import { RoutesPaths } from "@shared/config"
import { useBreadcrumbs } from "@shared/hooks"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"

import { GeneralInfoSection } from "./generalInfoSection/ui/GeneralInfoSection"
import { styles } from "./Preview.styles"
import { ProjectsSection } from "./projectsSection/ui/ProjectsSection"
import { SkillsSection } from "./skillsSection/ui/SkillsSection"

export const PreviewPage = () => {
	const t = useTranslations()
	const params = useParams<{ id: string }>()
	const cvId = params?.id as string
	const ref = useRef<HTMLDivElement>(null)
	const { cv, error: cvError } = useCv(cvId)
	const { skillCategories, error: skillCategoriesError } = useSkillCategories()

	useBreadcrumbs([
		{
			path: `${RoutesPaths.CVS}/${cvId}`,
			text: cv.name,
		},
		{
			path: `${RoutesPaths.CVS}/${cvId}${RoutesPaths.PREVIEW}`,
			text: t("cv.preview"),
		},
	])

	useErrorNotification([cvError, skillCategoriesError])

	return (
		<Box ref={ref} sx={styles.container}>
			<GeneralInfoSection
				previewRef={ref}
				cv={cv}
				skillCategories={skillCategories}
			/>
			<ProjectsSection projects={cv.projects || []} />
			<SkillsSection skills={cv.skills} skillCategories={skillCategories} />
		</Box>
	)
}
