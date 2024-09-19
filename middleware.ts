import { NextResponse, NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const { pathname } = new URL(request.url);
    const adminSession = false;

    if (pathname === '/admin' && !adminSession) {
        return NextResponse.redirect(new URL('/admin/login/', request.url))
    }

    if (pathname === '/admin' && adminSession) {
        return NextResponse.redirect(new URL('/admin/dashboard/', request.url))
    }
}

export const config = {
    matcher: '/admin',
}
