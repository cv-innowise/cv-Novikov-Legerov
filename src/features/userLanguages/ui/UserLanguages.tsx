"use client"

import { Suspense, useEffect } from "react"

import { Box, Stack } from "@mui/material"
import { useTranslations } from "next-intl"

import { useAuthUser, useAuthUserId } from "@entities/user"
import { useUserProfile } from "@entities/userProfileMenu/hooks/useUserProfile"
import { useLanguageProficiencyDialog } from "@features/languageProficiencyForm/hooks"
import { RoutesPaths } from "@shared/config"
import { BreadcrumbIconType } from "@shared/const"
import { useBreadcrumbs } from "@shared/hooks"
import BulkDeletion from "@shared/ui/bulk-deletion"
import Loader from "@shared/ui/loader"
import { addNotification } from "@shared/ui/notification/notification.service"

import { useDeleteProfileLanguage } from "../hooks/useDeleteProfileLanguage"
import { useLanguages } from "../hooks/useLanguages"
import LanguageButton from "./languageButton/LanguageButton"
import { styles } from "./UserLanguages.styles"

const UserLanguages = () => {
	const t = useTranslations()
	const userId = useAuthUserId()

	const { languages, error: languagesError } = useLanguages()

	const { profile, error: profileError } = useUserProfile(userId)

	const user = useAuthUser()

	useBreadcrumbs({
		path: `${RoutesPaths.USERS}/${profile.id}`,
		text: profile.full_name || user.email || "",
		icon: BreadcrumbIconType.Person,
	})

	const [
		deleteLanguagesQuery,
		{ error: deleteLanguagesError, loading: deleteLanguagesLoading },
	] = useDeleteProfileLanguage()

	const deleteLanguages = async (names: string[]) => {
		await deleteLanguagesQuery({
			variables: {
				language: {
					userId: userId,
					name: names,
				},
			},
		})
		addNotification(t("delete language notification"), "success")
	}

	const error = profileError || languagesError || deleteLanguagesError

	useEffect(() => {
		if (error) {
			addNotification(t(error.message), "error")
		}
	}, [error])

	let openAddDialog = () => {}
	if (profile && languages) {
		openAddDialog = useLanguageProficiencyDialog({
			mode: "add",
			userLanguages: profile.languages,
			languages: languages,
		})
	}

	return (
		<Stack sx={styles.container}>
			<BulkDeletion
				onDelete={deleteLanguages}
				onAdd={openAddDialog}
				isLoading={deleteLanguagesLoading}
				mode="languages"
			>
				<Box sx={styles.languagesContainer}>
					{profile.languages.map((language) => {
						return (
							<LanguageButton
								key={language.name}
								language={language}
								languages={languages}
							/>
						)
					})}
				</Box>
			</BulkDeletion>
		</Stack>
	)
}

export const UserLanguagesSuspense = () => {
	return (
		<Suspense fallback={<Loader />}>
			<UserLanguages />
		</Suspense>
	)
}
