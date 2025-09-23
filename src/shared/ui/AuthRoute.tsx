"use client"

import { useRouter } from "next/navigation"
import { useEffect, ReactNode } from "react";
import { getAccessTokenClientSide, getRefreshTokenClientSide, getSession } from "@shared/model/authStorage";
import Session from "@shared/types/session";

const AuthRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const token = typeof window !== "undefined" ? getAccessTokenClientSide() : null;
  let access_token: string | undefined;
  let refresh_token: string | undefined;
  let session: Session;
    if (typeof window !== "undefined") {
      access_token = getAccessTokenClientSide();
      refresh_token = getRefreshTokenClientSide();
      session = getSession();
    }
  useEffect(() => {
    if (access_token && refresh_token && session) {
      router.replace("/users");
    }
  }, [token, router]);

  if (token) return null;
  return children;
}

export default AuthRoute; 