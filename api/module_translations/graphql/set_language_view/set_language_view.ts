import { GraphQLSchema } from "graphql";
import { loadSchema } from "@graphql-tools/load";
import { join } from "node:path";
import { __API_DIR } from "@/constants/path/path_constants.ts";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import setSelectedLanguageView from "@api/module_translations/graphql/set_language_view/set_selected_language_view.ts";
import type { LangViewData } from "@api/module_translations/interfaces/languages.ts";
import { addResolversToSchema } from "@graphql-tools/schema";

const setLanguageView = async (): Promise<GraphQLSchema> => {
    const schema: GraphQLSchema = await loadSchema(
        join(__API_DIR, "module_translations/graphql/set_language_view/schema.graphql"),
        {
            loaders: [new GraphQLFileLoader()],
        },
    );

    const resolvers = {
        Mutation: {
            setLanguageView: async (_: object, args: LangViewData) => {
                const result = await setSelectedLanguageView({
                    view: args.view,
                    value: args.value,
                    language_code: args.language_code,
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

const set_language_view = setLanguageView();

export default set_language_view;
