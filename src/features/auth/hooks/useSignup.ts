"use client"

import type { AuthInput, AuthResult } from "cv-graphql";
import { useMutation } from "@apollo/client/react";
import SIGNUP_MUTATION from "@features/auth/api/signup";

type SignupArgs = {
  auth: AuthInput;
};

type SignupResult = {
  signup: AuthResult;
};

export function useSignup() {
  return useMutation<SignupResult, SignupArgs>(SIGNUP_MUTATION);
}