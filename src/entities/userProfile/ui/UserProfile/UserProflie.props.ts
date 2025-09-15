interface Session {
	id: string
	email: string
}

export interface UserProfileProps {
	session: Session
}
