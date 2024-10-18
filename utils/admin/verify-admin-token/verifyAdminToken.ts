import {type NextRequest} from "next/server";
import {VerifyAdminToken as VERIFY_ADMIN_TOKEN_MUTATION} from "../verify-admin-token/token-mutation.graphql"
import {print} from "graphql/index";
import GraphqlRequest from "../../graphql/GraphqlClient";
import {LoginResponse} from "../../../interfaces/admin/login/interfaces";

export const verifyAdminToken = async (request: NextRequest): Promise<boolean> => {
    const adminTokenCookies = request.cookies.get("adminToken");

    if (!adminTokenCookies) {
        return false;
    }

    const token = adminTokenCookies.value;
    const query = print(VERIFY_ADMIN_TOKEN_MUTATION);

    try {
        const response = await GraphqlRequest<LoginResponse>({query, variables: {token}}, 'admin_verify_token');

        if (Object.keys(response.data).includes('errors')) {
            const error = response.data.errors[0].message;
            console.log(error);

            return error;
        }

        return response.data.data.verifyToken.verify;

    } catch (err) {
        console.log(err);

        return false;
    }
}
