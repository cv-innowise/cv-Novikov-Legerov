import { makeVar } from "@apollo/client"

type Notification = {
	type: "error" | "info" | "success"
	message: string
}

export const notification$ = makeVar<Notification | null>(null)

export const isOpen$ = makeVar<boolean>(false)

export const addNotification = (
	message: string,
	type: Notification["type"] = "info",
) => {
	isOpen$(true)
	notification$({ message, type })
}

export const closeNotification = () => {
	isOpen$(false)
	setTimeout(() => notification$(null), 100)
}
