"use client"

import { Button, Divider, Stack, Typography } from "@mui/material"
import { useTranslations } from "next-intl"

import { getSkillCategoriesMap } from "../lib/getSkillCategoriesMap"
import { GeneralInfoSectionProps } from "./GeneralInfoSection.props"
import { ExportPdfButton } from "@features/exportPdf/ui/ExportPdfButton"

export const GeneralInfoSection = ({
	cv,
	skillCategories,
	previewRef
}: GeneralInfoSectionProps) => {
	const t = useTranslations()
	const skillCategoriesMap = getSkillCategoriesMap(cv.skills, skillCategories)

	return (
		<Stack component="section" direction="column" gap="32px">
			<Stack direction="row" justifyContent="space-between">
				<Stack direction="column">
					<Typography variant="h4">{cv.user?.profile.full_name}</Typography>
					<Typography>{cv.user?.position_name?.toUpperCase()}</Typography>
				</Stack>
				<ExportPdfButton previewRef={previewRef} cvName={cv.name} />
			</Stack>
			<Stack
				direction="row"
				gap="24px"
				divider={
					<Divider
						orientation="vertical"
						flexItem
						sx={(theme) => ({
							borderColor: theme.palette.primary.main,
						})}
					/>
				}
			>
				<Stack
					direction="column"
					gap="16px"
					sx={{ marginTop: "16px", flex: 3 }}
				>
					<Stack direction="column">
						<Typography sx={{ fontWeight: "bold", margin: "0 0 8px 0" }}>
							{t("cvTable.education")}
						</Typography>
						<Typography>{cv.education}</Typography>
					</Stack>
					{cv.languages && (
						<Stack direction="column" gap="8px">
							<Typography sx={{ fontWeight: "bold" }}>
								{t("Language proficiency")}
							</Typography>
							{cv.languages.map((lang) => (
								<Typography key={lang.name}>
									{lang.name} - {lang.proficiency}
								</Typography>
							))}
						</Stack>
					)}
					<Stack direction="column">
						<Typography sx={{ fontWeight: "bold", margin: "0 0 8px 0" }}>
							{t("domains")}
						</Typography>
						{cv.projects?.map((project) => (
							<Typography key={project.id}>{project.domain}</Typography>
						))}
					</Stack>
				</Stack>
				<Stack direction="column" gap="16px" sx={{flex: 7}}>
					<Stack direction="column" gap="8px" sx={{ marginTop: "16px" }}>
						<Typography sx={{ fontWeight: "bold" }}>{cv.name}</Typography>
						<Typography>{cv.description}</Typography>
					</Stack>
					{Object.entries(skillCategoriesMap).map(([category, skills]) => (
						<Stack key={category} direction="column" gap="8px">
							<Typography sx={{ fontWeight: "bold" }}>{category}</Typography>
							<Typography>{skills.join(", ")}</Typography>
						</Stack>
					))}
				</Stack>
			</Stack>
		</Stack>
	)
}
