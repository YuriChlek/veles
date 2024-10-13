import { NextResponse, NextRequest } from 'next/server';
import { verifyAdminToken } from "./utils/admin/verifyAdminToken";

export async function middleware(request: NextRequest) {
    const {pathname} = new URL(request.url);

    if (pathname.includes('admin')) {
        const tokenIsVerify = await verifyAdminToken(request);

        if (pathname.includes('dashboard') && !tokenIsVerify) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        if (pathname.includes('login') && tokenIsVerify) {
            return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        }

        if (!pathname.includes('login') && !tokenIsVerify) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*']
}
