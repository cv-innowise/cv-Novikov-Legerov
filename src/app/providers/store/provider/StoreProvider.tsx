"use client"

import { useRef } from "react"
import { Provider } from "react-redux"

import { userAction } from "@entities/user"

import { AppStore, makeStore } from "../store"
import { StoreProviderProps } from "./StoreProveder.props"

export default function StoreProvider({ user, children }: StoreProviderProps) {
	const storeRef = useRef<AppStore | null>(null)

	if (!storeRef.current) {
		storeRef.current = makeStore()
		if (user) {
			storeRef.current.dispatch(userAction.setUser(user))
		}
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}
