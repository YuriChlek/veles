import { join } from "node:path";
import { GraphQLSchema } from "graphql";
import { loadSchema } from "@graphql-tools/load";
import { __API_DIR } from "@/constants/path/path_constants.ts";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import removeSelectedLanguage from "@api/module_translations/graphql/remove_language/remove_selected_language.ts";
import { addResolversToSchema } from "@graphql-tools/schema";

const removeLanguageSchema = async (): Promise<GraphQLSchema> => {
    const schema: GraphQLSchema = await loadSchema(
        join(__API_DIR, "module_translations/graphql/remove_language/schema.graphql"),
        {
            loaders: [new GraphQLFileLoader()],
        },
    );

    const resolvers = {
        Mutation: {
            removeLanguage: async (_: object, args: { language_code: string }) => {
                const result = await removeSelectedLanguage(args.language_code);

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

const remove_language = removeLanguageSchema();

export default remove_language;
