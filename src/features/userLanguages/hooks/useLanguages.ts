"use client"

import { useSuspenseQuery } from "@apollo/client/react"

import { LANGUAGES, LanguagesResult } from "@entities/languages"

export const useLanguages = () => {
	const { data, error } = useSuspenseQuery<LanguagesResult>(LANGUAGES)

	return {
		languages: data.languages,
		error: error,
	}
}
