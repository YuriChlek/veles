import { addResolversToSchema } from "@graphql-tools/schema";
import { join } from "node:path";
import jwt from "jsonwebtoken";
import { GraphQLSchema } from "graphql";
import { loadSchema } from "@graphql-tools/load";
import { __API_DIR } from "@/constants/path/path_constants.ts";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { TOKEN_SECRET_KEY } from "@/constants/env/env_constants.ts";
import type { DecodedAdminToken } from "@api/module_admin/types/admin_user.ts";

const create_verify_token_schema = async () => {
    const schema: GraphQLSchema = await loadSchema(
        join(__API_DIR, "module_admin/graphql/verify_token/schema.graphql"),
        {
            loaders: [new GraphQLFileLoader()],
        },
    );

    const resolvers = {
        Mutation: {
            verifyToken: async (
                _: object,
                args: { token: string },
            ): Promise<{ verify: Boolean }> => {
                const { token } = args;
                try {
                    const decoded: DecodedAdminToken | string = jwt.verify(
                        token,
                        TOKEN_SECRET_KEY,
                    ) as string | DecodedAdminToken;

                    if (
                        typeof decoded === "object" &&
                        decoded !== null &&
                        "role" in decoded &&
                        decoded["role"] === "admin"
                    ) {
                        return { verify: true };
                    }

                    return { verify: false };
                } catch (err) {
                    return { verify: false };
                }
            },
        },
    };

    return addResolversToSchema({
        schema,
        resolvers,
    });
};

const verify_token = create_verify_token_schema();

export default verify_token;
