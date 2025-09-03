'use client'

import { useReactiveVar } from "@apollo/client/react"
import { Alert, Snackbar } from "@mui/material"
import { notification$, isOpen$, closeNotification } from "./notification.service"

const Notification = () => {
const notification = useReactiveVar(notification$);
const isOpen = useReactiveVar(isOpen$);

	return (
		<Snackbar
			open={isOpen}
			autoHideDuration={4000}
			onClose={closeNotification}
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
		>
			<Alert
				onClose={closeNotification}
				severity={notification?.type}
				variant="filled"
				sx={{ width: "100%", fontSize: "16px" }}
			>
				{notification?.message}
			</Alert>
		</Snackbar>
	)
}

export default Notification
