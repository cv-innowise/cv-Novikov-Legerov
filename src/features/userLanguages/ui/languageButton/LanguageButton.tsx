"use client"

import { useContext } from "react"

import { Typography } from "@mui/material"

import { useLanguageProficiencyDialog } from "@features/languageProficiencyForm/hooks"
import { getProficiencyColor } from "@features/userLanguages/lib/getProficiencyColor"
import { BulkDeletionContext } from "@shared/ui/bulk-deletion/BulkDeletion"
import ContextualActionButton from "@shared/ui/contextualActionButton/ContextualActionButton"

import { LanguageButtonProps } from "./LanguageButton.props"
import { styles } from "./LanguageButton.styles"

const LanguageButton = ({ language, languages }: LanguageButtonProps) => {
	const { selectedItems } = useContext(BulkDeletionContext)
	const isSelected = selectedItems.includes(language.name)
	const color = getProficiencyColor(language.proficiency)

	const openDialog = useLanguageProficiencyDialog({
		mode: "update",
		language: language,
		languages: languages
	})

	return (
		<ContextualActionButton
			color="secondary"
			item={language}
			openDialog={openDialog}
			sx={styles.button}
		>
			<Typography
				color={isSelected ? "secondary" : color}
				sx={{ width: "30%" }}
			>
				{language.proficiency}
			</Typography>
			<Typography>{language.name}</Typography>
		</ContextualActionButton>
	)
}

export default LanguageButton
