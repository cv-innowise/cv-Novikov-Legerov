import { User } from "cv-graphql"

export interface UserFormValues {
	firstName: string
	lastName: string
	department: string
	position: string
}
export interface UserFormProps {
	user: User
}
