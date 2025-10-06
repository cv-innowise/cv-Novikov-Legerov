import { UserSkillsSuspense } from "@features/skills/ui/Skills"

import { SkillsPageProps } from "./UserSkillsPage.props"
import { getAuthUserServerSide } from "@shared/lib/serverSideCookiesService"

const UserSkillsPage = async ({ params }: SkillsPageProps) => {
	return (
		<>
			<UserSkillsSuspense />
		</>
	)
}

export default UserSkillsPage
