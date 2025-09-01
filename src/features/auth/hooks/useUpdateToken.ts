"use client";

import UPDATE_TOKEN_MUTATION from "@features/auth/api/updateToken";
import type { UpdateTokenResult } from "cv-graphql";
import { useMutation } from "@apollo/client/react";

type UpdateResult = {
  updateToken: UpdateTokenResult;
};

export function useUpdateToken() {
  return useMutation<UpdateResult>(UPDATE_TOKEN_MUTATION);
}