"use client"

import {
	LinearProgress,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material"
import { useTranslations } from "next-intl"

import { getMasteryColor } from "@features/skills/lib/getMasteryColor"
import { Mastery } from "@shared/model/mastery"

import { getSkillCategoriesMasteryMap } from "../../generalInfoSection/lib/getSkillCategoriesMap"
import { SkillsSectionProps } from "./SkillsSection.props"
import { styles } from "./SkillsSection.styles"

export const SkillsSection = ({
	skills,
	skillCategories,
}: SkillsSectionProps) => {
	const t = useTranslations()
	const skillCategoriesMap = getSkillCategoriesMasteryMap(
		skills,
		skillCategories,
	)

	return (
		<Stack sx={{pageBreakBefore: "always"}} direction="column" gap="32px">
			<Typography variant="h4">{t("Skills")}</Typography>
			<Table size="small">
				<TableHead>
					<TableRow sx={styles.headerRow}>
						<TableCell colSpan={2}>{t("Skills").toUpperCase()}</TableCell>
						<TableCell align="center">
							{t("Skill mastery").toUpperCase()}
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody sx={styles.tableBody}>
					{Object.entries(skillCategoriesMap).map(([category, skills]) =>
						skills.map((skill, index) => (
							<TableRow
								key={skill.name}
								sx={
									index === skills.length - 1
										? styles.lastCategoryRow
										: undefined
								}
							>
								{index === 0 ? (
									<TableCell sx={styles.skillCategory}>{category}</TableCell>
								) : (
									<TableCell />
								)}
								<TableCell>{skill.name}</TableCell>
								<TableCell>
									<Stack
										direction="row"
										gap="16px"
										justifyContent="center"
										alignItems="center"
									>
										<LinearProgress
											variant="determinate"
											color={getMasteryColor(skill.mastery)}
											value={
												Object.values(Mastery).indexOf(skill.mastery) * 20 + 20
											}
											sx={{ minWidth: "40%" }}
										/>
										{t(skills[0].mastery)}
									</Stack>
								</TableCell>
							</TableRow>
						)),
					)}
				</TableBody>
			</Table>
		</Stack>
	)
}
