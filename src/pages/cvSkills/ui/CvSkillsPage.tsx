import { useAuthUserId } from "@entities/user"
import { UserSkillsSuspense } from "@features/skills/ui/Skills"

import { CvPageProps } from "./CvSkillsPage.props"

const UserSkillsPage = async ({ params }: CvPageProps) => {
	let { id } = await params

	return (
		<>
			<UserSkillsSuspense type="cv" id={id} />
		</>
	)
}

export default UserSkillsPage
