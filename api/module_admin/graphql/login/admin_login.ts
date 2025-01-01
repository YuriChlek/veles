import { join } from "node:path";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import { GraphQLSchema } from "graphql";
import { addResolversToSchema } from "@graphql-tools/schema";
import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import getAdminUser from "@api/module_admin/graphql/login/get_admin_user.ts";
import { __API_DIR } from "@/constants/path/path_constants.ts";
import { TOKEN_SECRET_KEY } from "@/constants/env/env_constants.ts";
import type { AdminAuthPayload, AdminUser } from "../../interfaces/admin_user";
import type { GraphQLContext } from "@api/module_admin/interfaces/graph_ql.ts";
import { ADMIN_TOKEN } from "@/constants/admin/admin_constants.ts";

const createAdminLoginSchema = async (): Promise<GraphQLSchema> => {
    const schema: GraphQLSchema = await loadSchema(
        join(__API_DIR, "module_admin/graphql/login/schema.graphql"),
        {
            loaders: [new GraphQLFileLoader()],
        },
    );

    const resolvers = {
        Mutation: {
            login: async (
                _: object,
                args: { login: string; password: string },
                context: GraphQLContext,
            ): Promise<AdminAuthPayload | Error> => {
                const { login, password } = args;
                const secret_key = TOKEN_SECRET_KEY;
                const user: AdminUser = await getAdminUser(login);

                if (!user) {
                    return new Error("Username or password is incorrect.");
                }

                const { password: userPass, ...userResp } = user;
                const verifyPass = await argon2.verify(userPass, password);

                if (!verifyPass) {
                    return new Error("Password is incorrect.");
                }

                const token = jwt.sign(
                    { admin_id: user.admin_id, role: user.role },
                    secret_key,
                    { expiresIn: "3d" },
                );

                context.res.cookie(ADMIN_TOKEN, token, {
                    httpOnly: true,
                    secure: true,
                    maxAge: 3 * 24 * 60 * 60 * 1000,
                    sameSite: "lax",
                    path: "/admin/",
                });

                return {
                    user: userResp,
                    token,
                };
            },
        },
    };

    return addResolversToSchema({
        schema,
        resolvers,
    });
};

const admin_login = createAdminLoginSchema();

export default admin_login;
