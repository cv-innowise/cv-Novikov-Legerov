import UserSkills from "@features/user-skills"
import { getSession } from "@shared/lib/serverSideCookiesService"

const UserProfilePage = async () => {
	const session = await getSession();
	console.log(session)
	return (
		<>
			<UserSkills session={session} />
		</>
	)
}

export default UserProfilePage
