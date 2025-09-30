import { UserLanguagesSuspense } from "@features/userLanguages/ui/UserLanguages"
import { getUserAccessInfo } from "@shared/lib/auth/authService"

const UserLanguagesPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params
	const { userId, isDisabled } = await getUserAccessInfo(id)

	return (
		<>
			<UserLanguagesSuspense userId={userId} isDisabled={isDisabled} />
		</>
	)
}

export default UserLanguagesPage