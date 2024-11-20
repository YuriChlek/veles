import gql from "graphql-tag";

export const GET_LANGUAGES_QUERY = gql`
    query GetLanguages {
        languages {
            language_view
            language_code
            default_frontend_language
            default_admin_language
        }
    }
`;
