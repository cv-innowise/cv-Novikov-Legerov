"use client"

import { useParams } from "next/navigation"

import { useAppSelector } from "@app/providers/store/hooks/hooks"
import { Cv } from "cv-graphql"

export const useAuthUserId = () => {
	const id = useAppSelector((state) => state.user.id)
	return String(id)
}

export const useIsAuthUserHasAccess = (cv?: Cv) => {
	const user = useAppSelector((state) => state.user)
	const params = useParams<{ id: string }>()
	let id = params?.id || user.id

	if (cv?.user?.id) {
		return user.role === "Admin" || cv?.user?.id == user.id
	}

	return user.role === "Admin" || id == user.id
}

export const useAuthUser = () => {
	return useAppSelector((state) => state.user)
}
