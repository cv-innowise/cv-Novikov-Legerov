"use client"

import { Suspense, useEffect, useState } from "react"

import { Box, Stack } from "@mui/material"
import { useTranslations } from "next-intl"

import { useUserProfile } from "@entities/userProfileMenu/hooks/useUserProfile"
import { useLanguageProficiencyDialog } from "@features/languageProficiencyForm/hooks"
import BulkDeletion from "@shared/ui/bulk-deletion"
import Loader from "@shared/ui/loader"
import { addNotification } from "@shared/ui/notification/notification.service"

import { useDeleteProfileLanguage } from "../hooks/useDeleteProfileLanguage"
import { useLanguages } from "../hooks/useLanguages"
import LanguageButton from "./languageButton/LanguageButton"
import { UserLanguagesProps } from "./UserLanguages.props"
import { styles } from "./UserLanguages.styles"

const UserLanguages = ({ userId, isDisabled }: UserLanguagesProps) => {
	const t = useTranslations()

	const { languages, error: languagesError } = useLanguages()

	const { profile, error: profileError } = useUserProfile(userId)

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
				isDisabled={isDisabled}
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

export const UserLanguagesSuspense = ({
	userId,
	isDisabled,
}: UserLanguagesProps) => {
	return (
		<Suspense fallback={<Loader />}>
			<UserLanguages userId={userId} isDisabled={isDisabled} />
		</Suspense>
	)
}
