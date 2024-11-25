import gql from "graphql-tag";

export const SET_LANGUAGE_VIEW_MUTATION = gql`
    mutation SetLanguageView($view: String!, $value: Boolean, $language_code: String!) {
        setLanguageView(view: $view, value: $value, language_code: $language_code) {
            language_view
            language_code
            frontend_language
            admin_language
        }
    }
`;
