"use client"

import type { ForgotPasswordInput } from "cv-graphql"

import { useMutation } from "@apollo/client/react"

import FORGOT_PASSWORD from "@features/forgotPassword/api/forgotPassword"

type ForgotPasswordArgs = {
    auth: ForgotPasswordInput
}

type ForgotPasswordResult = {
    forgotPassword: null
}

export function useForgotPassword() {
    return useMutation<ForgotPasswordResult, ForgotPasswordArgs>(FORGOT_PASSWORD)
}
