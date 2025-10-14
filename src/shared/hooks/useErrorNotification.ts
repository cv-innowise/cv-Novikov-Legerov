"use client"

import { useEffect } from "react"

import { ErrorLike } from "@apollo/client"
import { useTranslations } from "next-intl"
import { addNotification } from "@shared/ui/notification/notification.service"

export const useErrorNotification = (errors: (ErrorLike | undefined)[]) => {
	const t = useTranslations()
	const error = errors.find((err) => Boolean(err))
	console.log(error?.message)
	useEffect(() => {
		if (error) {
			addNotification(t("errors.default"), "error")
		}
	}, [error])
}
