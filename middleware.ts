import { NextResponse, NextRequest } from "next/server";
import { verifyAdminToken } from "./utils/admin/verify-admin-token/verifyAdminToken";
import { ADMIN_AREA } from "./constants/locales/locales_constants";

export async function middleware(request: NextRequest) {
    const { pathname } = new URL(request.url);

    if (pathname.includes("admin")) {
        const tokenIsVerify = await verifyAdminToken(request);

        if (!pathname.includes("panel") && tokenIsVerify) {
            return NextResponse.redirect(new URL("/admin/panel/dashboard", request.url));
        } else if (pathname === "/admin/panel" && tokenIsVerify) {
            return NextResponse.redirect(new URL("/admin/panel/dashboard", request.url));
        } else if (pathname.includes("panel") && !tokenIsVerify) {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        } else if (pathname.includes("login") && tokenIsVerify) {
            return NextResponse.redirect(new URL("/admin/panel/dashboard", request.url));
        } else if (!pathname.includes("login") && !tokenIsVerify) {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }
    }

    const response = NextResponse.next();
    response.headers.set("area", ADMIN_AREA);

    return response;
}

export const config = {
    matcher: ["/admin/:path*"],
};
