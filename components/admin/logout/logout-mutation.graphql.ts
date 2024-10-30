import gql from "graphql-tag";

export const ADMIN_LOGOUT_MUTATION = gql`
    mutation AdminLogout {
        adminLogout {
            logout
        }
    }
`;
