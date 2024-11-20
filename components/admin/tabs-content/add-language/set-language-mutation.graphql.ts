import gql from "graphql-tag";

export const SET_LANGUAGE_MUTATION = gql`
    mutation SetLanguage(
        $language_view: String!
        $language_code: String!
        $default_frontend_language: Boolean!
        $default_admin_language: Boolean!
    ) {
        setLanguage(
            language_view: $language_view
            language_code: $language_code
            default_frontend_language: $default_frontend_language
            default_admin_language: $default_admin_language
        ) {
            language_view
            language_code
            default_frontend_language
            default_admin_language
        }
    }
`;
