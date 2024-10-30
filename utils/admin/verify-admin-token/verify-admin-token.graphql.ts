import gql from "graphql-tag";

export const VERIFY_ADMIN_TOKEN_MUTATION = gql`
    mutation VerifyAdminToken($token: String!) {
        verifyToken(token: $token) {
            verify
        }
    }
`;
