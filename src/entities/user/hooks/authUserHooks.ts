'use client'

import { useSelector } from "react-redux"

import { useParams } from "next/navigation"

import { RootState } from "@app/providers/store/store"

export const useAuthUserId = () => {
	const id = useSelector((state: RootState) => state.user.id)
	return String(id)
}

export const useIsAuthUserHasAccess = () => {
	const user = useSelector((state: RootState) => state.user)
	const params = useParams<{ id: string }>()
	let id = params?.id || user.id
	
	return user.role === "Admin" || id == user.id
}

export const useAuthUser = () => {
	return useSelector((state: RootState) => state.user)
}