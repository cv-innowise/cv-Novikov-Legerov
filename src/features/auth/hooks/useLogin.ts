"use client"

import type { AuthInput, AuthResult } from "cv-graphql"

import { useLazyQuery } from "@apollo/client/react"

import LOGIN from "@features/auth/api/login"

type LoginArgs = {
	auth: AuthInput
}

type LoginResult = {
	login: AuthResult
}

export function useLogin() {
	return useLazyQuery<LoginResult, LoginArgs>(LOGIN)
}
