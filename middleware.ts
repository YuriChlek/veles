import { NextResponse, NextRequest } from 'next/server';
import { verifyAdminToken } from "./utils/admin/verify-admin-token/verifyAdminToken";

export async function middleware(request: NextRequest) {
    const {pathname} = new URL(request.url);

    if (pathname.includes('admin')) {
        const tokenIsVerify = await verifyAdminToken(request);

        if (!pathname.includes('panel') && tokenIsVerify) {
            return NextResponse.redirect(new URL('/admin/panel/dashboard', request.url));
        } else if (pathname === '/admin/panel' && tokenIsVerify) {
            return NextResponse.redirect(new URL('/admin/panel/dashboard', request.url));
        } else if (pathname.includes('panel') && !tokenIsVerify) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        } else if (pathname.includes('login') && tokenIsVerify) {
            return NextResponse.redirect(new URL('/admin/panel/dashboard', request.url));
        } else if (!pathname.includes('login') && !tokenIsVerify) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*']
}
