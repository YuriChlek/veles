import gql from "graphql-tag";

export const SET_LANGUAGE_MUTATION = gql`
    mutation SetLanguage(
        $language_view: String!
        $language_code: String!
        $frontend_language: Boolean!
        $admin_language: Boolean!
    ) {
        setLanguage(
            language_view: $language_view
            language_code: $language_code
            frontend_language: $frontend_language
            admin_language: $admin_language
        ) {
            language_view
            language_code
            frontend_language
            admin_language
        }
    }
`;
