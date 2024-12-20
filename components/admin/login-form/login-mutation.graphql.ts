import gql from "graphql-tag";

export const ADMIN_LOGIN_MUTATION = gql`
    mutation AdminLogin($login: String!, $password: String!) {
        login(login: $login, password: $password) {
            user {
                admin_id
                login
                email
                first_name
                last_name
                role
            }
            token
        }
    }
`;
