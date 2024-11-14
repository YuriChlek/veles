import { type NextRequest } from "next/server";
import { VERIFY_ADMIN_TOKEN_MUTATION } from "./verify-admin-token.graphql";
import { print } from "graphql/index";
import GraphqlRequest from "@/utils/graphql/GraphqlClient";
import type { VerifyAdminToken } from "@/interfaces/admin/verify-token/interfases";

export const verifyAdminToken = async (
    request: NextRequest,
): Promise<boolean | string> => {
    const adminTokenCookies = request.cookies.get("adminToken");

    if (!adminTokenCookies) {
        return false;
    }

    const token = adminTokenCookies.value;
    const query = print(VERIFY_ADMIN_TOKEN_MUTATION);

    try {
        const response = await GraphqlRequest<VerifyAdminToken>(
            { query, variables: { token } },
            "admin_verify_token",
        );

        if (Object.keys(response.data).includes("errors")) {
            const error = response.data.errors[0].message;
            console.log(error);

            return error;
        }

        return response.data.data.verifyToken.verify;
    } catch (error: Error) {
        console.log(error.message);

        return false;
    }
};
