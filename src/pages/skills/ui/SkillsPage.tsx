import { UserSkillsSuspense } from "@features/userSkills/ui/UserSkills"
import { getUserAccessInfo } from "@shared/lib/auth/authService"

const SkillsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params
	const { userId, isDisabled } = await getUserAccessInfo(id)

	return (
		<>
			<UserSkillsSuspense userId={userId} isDisabled={isDisabled} />
		</>
	)
}

export default SkillsPage