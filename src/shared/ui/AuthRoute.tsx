"use client"

import { useRouter } from "next/navigation"
import { useEffect, ReactNode } from "react";
import { getAccessToken } from "@shared/model/authStorage";

const AuthRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const token = typeof window !== "undefined" ? getAccessToken() : null;

  useEffect(() => {
    if (token) {
      router.replace("/users");
    }
  }, [token, router]);

  if (token) return null;
  return children;
}

export default AuthRoute; 