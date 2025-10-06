"use client"

import { useParams } from "next/navigation"

import { useAppSelector } from "@app/providers/store/hooks/hooks"

export const useAuthUserId = () => {
	const id = useAppSelector((state) => state.user.id)
	return String(id)
}

export const useIsAuthUserHasAccess = () => {
	const user = useAppSelector((state) => state.user)
	const params = useParams<{ id: string }>()
	let id = params?.id || user.id

	return user.role === "Admin" || id == user.id
}

export const useAuthUser = () => {
	return useAppSelector((state) => state.user)
}
