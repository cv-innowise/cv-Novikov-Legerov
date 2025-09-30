import UserSkills from "@features/user-skills"
import { getSession } from "@shared/lib/serverSideCookiesService"

const UserProfilePage = async () => {
	const session = await getSession();

	return (
		<>
			<UserSkills session={session} />
		</>
	)
}

export default UserProfilePage
