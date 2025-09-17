import { NextRequest } from "next/server"

import { NextResponse } from "next/server"
import { updateTokenRequest } from "@features/auth/model/authService"
import { isTokenExpired } from "@shared/lib/tokenService"

export const middleware = async (req: NextRequest) => {
	const url = req.nextUrl.clone()
	const access_token = req.cookies.get("access_token")?.value
	const refresh_token = req.cookies.get("refresh_token")?.value

	const isAuthPage =
		url.pathname.startsWith("/auth") || url.pathname === "/forgot-password"
	const isProtected = !isAuthPage

	if (isAuthPage && access_token && !isTokenExpired(refresh_token)) {
		return NextResponse.redirect(new URL("/users", req.url))
	}

	if (
		(isProtected && !refresh_token) ||
		(isProtected && isTokenExpired(refresh_token))
	) {
		return NextResponse.redirect(new URL("/auth/login", req.url))
	}

	if (isTokenExpired(access_token) && !isTokenExpired(refresh_token)) {
		const newAccessToken = await updateTokenRequest(refresh_token);
		const res = NextResponse.next();
		res.cookies.set("access_token", newAccessToken);
		return res
	}	

	return NextResponse.next()
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
