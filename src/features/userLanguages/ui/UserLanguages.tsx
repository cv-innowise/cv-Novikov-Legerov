"use client"

import { Suspense } from "react"

import { Box, Stack } from "@mui/material"
import { useTranslations } from "next-intl"

import {
	useAuthUser,
	useAuthUserId,
	useIsAuthUserHasAccess,
} from "@entities/user"
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
import { useParams } from "next/navigation"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"

const UserLanguages = () => {
	const t = useTranslations()
	const params = useParams<{ id: string }>()
	const userId = params?.id || useAuthUserId()

	const hasAccess = useIsAuthUserHasAccess()

	const { languages, error: languagesError } = useLanguages()

	const { profile, error: profileError } = useUserProfile(userId)

	const user = useAuthUser()

	useBreadcrumbs([
		{
			path: `${RoutesPaths.USERS}/${profile.id}`,
			text: profile.full_name || user.email || "",
			icon: BreadcrumbIconType.Person,
		},
		{
			path: `${RoutesPaths.USERS}/${profile.id}${RoutesPaths.LANGUAGES}`,
			text: t("navigation.languages"),
		},
	])

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

	useErrorNotification([error])

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
				hasAccess={hasAccess}
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
