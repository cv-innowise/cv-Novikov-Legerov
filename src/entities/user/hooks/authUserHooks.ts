'use client'

import { useSelector } from "react-redux"

import { useParams } from "next/navigation"

import { RootState } from "@app/providers/store/store"

export const useAuthUserId = () => {
	const id = useSelector((state: RootState) => state.user.id)
	return id as string
}

export const useIsAuthUserDisabled = () => {
	const user = useSelector((state: RootState) => state.user)
	const params = useParams<{ id: string }>()
	let id = user.id
	id = params?.id ? params.id : id

	if (user.role === "Admin" || id === user.id) {
		return false
	} else {
		return true
	}
}

export const useAuthUser = () => {
	return useSelector((state: RootState) => state.user)
}