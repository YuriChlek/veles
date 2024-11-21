import gql from "graphql-tag";

export const GET_LOCALES_DATA_QUERY = gql`
    query GetLanguages {
        languages {
            language_view
            language_code
            default_frontend_language
            default_admin_language
        }
    }
`;

export default GET_LOCALES_DATA_QUERY;
