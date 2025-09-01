"use client"

import LOGIN from "@features/auth/api/login";
import { useLazyQuery } from "@apollo/client/react";
import type { AuthInput, AuthResult } from "cv-graphql";

type LoginArgs = {
  auth: AuthInput;
};

type LoginResult = {
  login: AuthResult;
};

export function useLogin() {
  return useLazyQuery<LoginResult, LoginArgs>(LOGIN);
}