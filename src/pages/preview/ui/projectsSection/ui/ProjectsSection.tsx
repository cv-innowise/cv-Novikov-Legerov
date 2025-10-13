"use client"

import { Divider, Stack, Typography } from "@mui/material"
import { CvProject } from "cv-graphql"
import { format } from "date-fns"
import { useTranslations } from "next-intl"

import { List } from "./ProjectsSection.styles"

export const ProjectsSection = ({ projects }: { projects: CvProject[] }) => {
	const t = useTranslations()

	return (
		<Stack sx={{pageBreakBefore: "always"}} direction="column" gap="32px">
			<Typography variant="h4">{t("projects")}</Typography>
			{projects.map((project) => (
				<Stack
					key={project.id}
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
						<Typography
							sx={(theme) => ({
								color: theme.palette.primary.main,
								fontWeight: "bold",
							})}
						>
							{project.name.toUpperCase()}
						</Typography>
						<Typography>{project.description}</Typography>
					</Stack>
					<Stack direction="column" gap="16px" sx={{ flex: 7 }}>
						<Stack direction="column" gap="8px" sx={{ marginTop: "16px" }}>
							<Typography sx={{ fontWeight: "bold" }}>{t("roles")}</Typography>
							<Typography>{project.roles.join(", ")}</Typography>
						</Stack>
						<Stack direction="column" gap="8px">
							<Typography sx={{ fontWeight: "bold" }}>{t("period")}</Typography>
							<Typography>
								{format(new Date(project.start_date || ""), "dd.MM.yyyy") +
									" - " +
									(project.end_date
										? format(new Date(project.end_date || ""), "dd.MM.yyyy")
										: t("Till now"))}
							</Typography>
						</Stack>
						<Stack direction="column" gap="8px">
							<Typography sx={{ fontWeight: "bold" }}>
								{t("responsibilities")}
							</Typography>
							<List>
								{project.responsibilities.map((resp) => (
									<li key={resp}>{resp}</li>
								))}
							</List>
						</Stack>
						<Stack direction="column" gap="8px">
							<Typography sx={{ fontWeight: "bold" }}>{t("environment")}</Typography>
							<Typography>{project.environment.join(", ")}</Typography>
						</Stack>
					</Stack>
				</Stack>
			))}
		</Stack>
	)
}
