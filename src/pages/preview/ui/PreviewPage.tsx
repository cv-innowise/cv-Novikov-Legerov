"use client"

import { Box } from "@mui/material"
import { styles } from "./Preview.styles"
import { GeneralInfoSection } from "./generalInfoSection/ui/GeneralInfoSection"
import { useCv } from "@entities/cv/hooks/useCv"
import { useParams } from "next/navigation"
import { useSkills } from "@features/skills/hooks/useSkills"
import { useSkillCategories } from "@features/skills/hooks/useSkillCategories"
import { ProjectsSection } from "./projectsSection/ui/ProjectsSection"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"
import { SkillsSection } from "./skillsSection/ui/SkillsSection"
import { useRef } from "react"

export const PreviewPage = () => {
    const params = useParams<{id: string}>()
    const cvId = params?.id as string
     const ref = useRef<HTMLDivElement>(null)
    const { cv, error: cvError } = useCv(cvId)
	const { skillCategories, error: skillCategoriesError } = useSkillCategories()

    useErrorNotification([cvError, skillCategoriesError])

    return (
        <Box ref={ref} sx={styles.container}>
            <GeneralInfoSection previewRef={ref} cv={cv} skillCategories={skillCategories} />
            <ProjectsSection projects={cv.projects || []} />
            <SkillsSection skills={cv.skills} skillCategories={skillCategories} />
        </Box>
    )
}