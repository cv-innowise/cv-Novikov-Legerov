import { ErrorLike } from "@apollo/client"
import { addNotification } from "@shared/ui/notification/notification.service"
import { useTranslations } from "next-intl"
import { useEffect } from "react"

export const useErrorNotification = (errors: (ErrorLike | undefined)[]) => {
	const t = useTranslations()

    const error = errors.find((err) => Boolean(err))

	useEffect(() => {
		if (error) {
			addNotification(t(error.message), "error")
		}
	}, [error])
}