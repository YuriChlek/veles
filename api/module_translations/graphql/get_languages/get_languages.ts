import { join } from "node:path";
import { GraphQLSchema } from "graphql";
import { loadSchema } from "@graphql-tools/load";
import { __API_DIR } from "@/constants/path/path_constants.ts";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import getLanguagesData from "@api/module_translations/graphql/get_languages/get_languages_data.ts";

const getLanguagesSchema = async (): Promise<GraphQLSchema> => {
    const schema: GraphQLSchema = await loadSchema(
        join(__API_DIR, "module_translations/graphql/get_languages/schema.graphql"),
        {
            loaders: [new GraphQLFileLoader()],
        },
    );

    const resolvers = {
        Query: {
            languages: async () => {
                return await getLanguagesData();
            },
        },
    };

    return addResolversToSchema({
        schema,
        resolvers,
    });
};

const get_languages = getLanguagesSchema();

export default get_languages;
