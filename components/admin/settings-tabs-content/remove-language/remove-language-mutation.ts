import gql from "graphql-tag";

export const REMOVE_LANGUAGE_MUTATION = gql`
    mutation RemoveLanguage($language_code: String!) {
        removeLanguage(language_code: $language_code) {
            language_view
            language_code
            frontend_language
            admin_language
        }
    }
`;
