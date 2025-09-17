"use client"

import { useSuspenseQuery, useQuery } from "@apollo/client/react"
import { Suspense } from "react"

import { Stack, Typography } from "@mui/material"

import { PROFILE } from "@entities/user-profile/api/profile"
import { getSession } from "@shared/model/authStorage"
import BulkDeletion from "@shared/ui/bulk-deletion"

import { UserSkillsProps } from "./User.Skills.props"
import { userSkillsStyles as styles } from "./UserSkills.styles"
import { getClient } from "@app/providers/apollo/ApolloClient"
import { Profile } from "cv-graphql"

const UserSkills = ({ disabled = true, session }: UserSkillsProps) => {
	// const session = getSession();
	// if (session.role === "Admin") disabled = false

	// const { data } = useSuspenseQuery(PROFILE, { variables: { userId: session.id } });
	// console.log(data);
	// const onDelete = (ids: string[]): Promise<void> => {
	// 	return new Promise((resolve) => {
	// 		setTimeout(() => {
	// 			resolve()
	// 		}, 1000)
	// 	})
	// }

	const { data } = useQuery<{ profile: Profile }>(PROFILE, {
		variables: { userId: session.id },
	})

	// const { data } = await getClient().query({
	// 	query: PROFILE,
	// 	variables: { userId: session.id },
	// });
	console.log(data)

	return (
		
				<Stack sx={styles.container}>
					<Typography>
					
					</Typography>
				</Stack>
		
		
	
	)
}

export default UserSkills
