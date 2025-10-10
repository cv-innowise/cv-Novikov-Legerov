"use client"

import { useMemo, useState } from "react"

import { DialogContent, TextField } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { Project } from "cv-graphql"
import { format, parse } from "date-fns"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"

import { useErrorNotification } from "@shared/hooks/useErrorNotification"
import { hideDialog } from "@shared/ui/dialog/model/dialogService"
import DialogActions from "@shared/ui/dialog/ui/dialogActions/ui/DialogActions"
import FormTextField from "@shared/ui/form/FormTextField"
import FormWrapper from "@shared/ui/form/FormWrapper"
import { addNotification } from "@shared/ui/notification/notification.service"

import { useAddCvProject, useUpdateCvProject } from "../hooks"
import { CvProjectFormInput } from "../model/CvProjectForm.types"
import { CvProjectFormProps } from "./CvProjectForm.props"
import { styles } from "./CvProjectForm.styles"
import { DatePicker } from "./DatePicker/ui/DatePicker"
import { EnvironmentAutocomplete } from "./EnvironmentAutocomplete/ui/EnvironmentAutocomplete"
import { ProjectAutocomplete } from "./ProjectAutocomplete/ui/ProjectAutocomplete"
import { CvProjectFormValidation } from "@shared/model/validation/validation"

const CvProjectForm = ({ mode, project, projects }: CvProjectFormProps) => {
	const t = useTranslations()
	const schema = CvProjectFormValidation(t)
	const [projectOption, setProjectOption] = useState<Project | null>(
		project?.project || null,
	)
	console.log(projectOption)
	const [
		addCvProjectQuery,
		{ error: addCvProjectError, loading: addCvProjectLoading },
	] = useAddCvProject()

	const [
		updateCvProjectQuery,
		{ error: updateCvProjectError, loading: updateCvProjectLoading },
	] = useUpdateCvProject()

	const cvId = useParams<{ id: string }>()?.id as string

	const defaultValues = useMemo(() => {
		if (project) {
			return {
				project: {
					id: project.project.id,
					name: project.project.name,
				},
				start_date: parse(project.start_date, "yyyy-MM-dd", new Date()),
				end_date: !project.end_date
					? null
					: parse(project.end_date, "yyyy-MM-dd", new Date()),
				responsibilities: project.responsibilities.join("; "),
			}
		}

		return {
			project: { id: "", name: "" },
			start_date: null,
			end_date: null,
			responsibilities: "",
		}
	}, [])

	const addCvProject = (data: CvProjectFormInput) => {
		addCvProjectQuery({
			variables: {
				project: {
					cvId: cvId,
					projectId: data.project.id,
					start_date: format(data.start_date!, "yyyy-MM-dd"),
					end_date: format(data.end_date!, "yyyy-MM-dd"),
					roles: [t("software engineer")],
					responsibilities: data.responsibilities.split("; "),
				},
			},
		}).then(() => {
			addNotification(t("add project notification"), "success")
			hideDialog()
		})
	}

	const updateCvProject = (data: CvProjectFormInput) => {
		updateCvProjectQuery({
			variables: {
				project: {
					cvId: cvId,
					projectId: data.project.id,
					start_date: format(data.start_date!, "yyyy-MM-dd"),
					end_date: format(data.end_date!, "yyyy-MM-dd"),
					roles: project?.roles || [t("software engineer")],
					responsibilities: data.responsibilities.split("; "),
				},
			},
		}).then(() => {
			addNotification(t("update project notification"), "success")
			hideDialog()
		})
	}

	const error = [addCvProjectError, updateCvProjectError]

	useErrorNotification(error)

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<FormWrapper<CvProjectFormInput>
				onSubmit={mode === "add" ? addCvProject : updateCvProject}
				schema={schema}
				defaultValues={defaultValues}
			>
				<DialogContent sx={styles.content}>
					<ProjectAutocomplete
						projects={projects}
						disabled={mode === "update"}
						onChange={setProjectOption}
					/>
					<TextField
						value={projectOption?.domain || ""}
						disabled
						label={t("domain")}
					/>
					<DatePicker name="start_date" label="start date" />
					<DatePicker name="end_date" label="end date" />
					<TextField
						multiline
						minRows={5}
						label={t("description")}
						fullWidth
						value={projectOption?.description || ""}
						disabled
						sx={styles.fullWidthGridElement}
					/>
					<EnvironmentAutocomplete
						environment={projectOption?.environment || []}
					/>
					<FormTextField
						name="responsibilities"
						label={t("responsibilities")}
						fullWidth
						sx={styles.fullWidthGridElement}
					/>
				</DialogContent>
				<DialogActions
					loaders={[addCvProjectLoading, updateCvProjectLoading]}
					confirmButtonText="Confirm"
				/>
			</FormWrapper>
		</LocalizationProvider>
	)
}

export default CvProjectForm
