import { join } from "node:path";
import { GraphQLSchema } from "graphql";
import { loadSchema } from "@graphql-tools/load";
import { __API_DIR } from "@/constants/path/path_constants.ts";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import setSelectedLanguage from "@api/module_translations/graphql/set_language/set_selected_language.ts";

const setLanguagesSchema = async (): Promise<GraphQLSchema> => {
    const schema: GraphQLSchema = await loadSchema(
        join(__API_DIR, "module_translations/graphql/set_language/schema.graphql"),
        {
            loaders: [new GraphQLFileLoader()],
        },
    );

    const resolvers = {
        Mutation: {
            setLanguage: async (
                _: object,
                args: {
                    language_view: string;
                    language_code: string;
                    default_frontend_language: boolean;
                    default_admin_language: boolean;
                },
            ) => {
                const result = await setSelectedLanguage({
                    language_view: args.language_view,
                    language_code: args.language_code,
                    default_admin_language: args.default_admin_language,
                    default_frontend_language: args.default_frontend_language,
                });

                if (!Array.isArray(result)) {
                    throw new Error("setSelectedLanguage did not return an array");
                }

                return result;
            },
        },
    };

    return addResolversToSchema({
        schema,
        resolvers,
    });
};

const set_language = setLanguagesSchema();

export default set_language;
