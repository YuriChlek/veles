import { join } from 'node:path';
import jwt from 'jsonwebtoken';
import { GraphQLSchema } from 'graphql';
import { addResolversToSchema } from '@graphql-tools/schema';
import { loadSchema } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { AdminAuthPayload, BaseAdminUser } from "../../interfaces/admin_user";
import { GraphQLContext } from "../../interfaces/graph_ql";
import getAdminUser from "./get_admin_user";
import { __API_DIR } from "../../../../constants/path/path_constants";
import { TOKEN_SECRET_KEY } from "../../../../constants/env/env_constants";

const create_admin_login_schema = async () => {
    const schema: GraphQLSchema = await loadSchema(join(__API_DIR, 'module_admin/graphql/login/schema.graphql'), {
        loaders: [
            new GraphQLFileLoader()
        ]
    });

    const resolvers = {
        Mutation: {
            login: async (_: object, args: { login: string, password: string }, context: GraphQLContext): Promise<AdminAuthPayload | Error> => {
                const { login, password } = args;
                const secret_key = TOKEN_SECRET_KEY;
                const user: BaseAdminUser = await getAdminUser(login, password);

                if (!user) {
                    return new Error('Username or password is incorrect.');
                }

                const token = jwt.sign({admin_id: user.admin_id, role: user.role}, secret_key, { expiresIn: '3d' });

                context.res.cookie('adminToken', token, {
                    httpOnly: true,
                    secure: true,
                    maxAge: 3 * 24 * 60 * 60 * 1000,
                    sameSite: 'lax',
                    path: '/admin/'
                });

                return {
                    user,
                    token
                };
            }
        }
    };

    return addResolversToSchema({
        schema,
        resolvers
    });
};

const admin_login = create_admin_login_schema();

export default admin_login;
