"use server";

import { type NextRequest } from "next/server";

export const verifyAdminToken = async (request: NextRequest): Promise<boolean> => {
    const token = request.cookies.get("adminToken");

    return !!token;
}
