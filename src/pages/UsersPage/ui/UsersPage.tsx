import { Metadata } from "next"

import { query } from "@app/providers/apollo/ApolloClient"
import { userHeadCells, UserItem } from "@features/users"
import { USERS } from "@features/users/api/users"
import { UsersResult } from "@features/users/api/users.types"
import { BasicTable } from "@widgets/table"

export const metadata: Metadata = {
	title: "Users Page",
	description: "List of all users",
}

const UsersPage = async () => {
	const { data } = await query<UsersResult>({ query: USERS })

	return (
		<BasicTable
			headCells={userHeadCells}
			data={data?.users || []}
			renderRow={(user) => <UserItem key={user.id} user={user} />}
		/>
	)
}

export default UsersPage
