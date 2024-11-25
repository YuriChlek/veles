import gql from "graphql-tag";

export const GET_LANGUAGES_QUERY = gql`
    query GetLanguages {
        languages {
            language_view
            language_code
            frontend_language
            admin_language
        }
    }
`;
