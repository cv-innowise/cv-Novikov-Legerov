import { User, UserRole } from "cv-graphql"

export interface UserDialogFormValues {
	email: string
	password: string
	firstName: string
	lastName: string
	department: string
	position: string
	role: UserRole
}

export interface UserDialogFormProps {
	user: User
}
