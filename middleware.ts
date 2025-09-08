import type { NextRequest } from "next/server"

import { NextResponse } from "next/server"

export function middleware(req: NextRequest) {
	const url = req.nextUrl.clone()
	const token = req.cookies.get("access_token")?.value
  
  const isAuthPage = url.pathname.startsWith("/auth") || url.pathname === "/forgot-password"
  const isProtected = !isAuthPage

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/users", req.url))
  }

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }

	return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}