import { addResolversToSchema } from '@graphql-tools/schema';
import { join } from 'node:path';
import { GraphQLSchema } from 'graphql';
import { loadSchema } from '@graphql-tools/load';
import { __API_DIR } from "../../../../constants/path/path_constants";
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import type { GraphQLContext } from "../../interfaces/graph_ql";

const create_logout_admin_schema = async () => {
    const schema: GraphQLSchema = await loadSchema(join(__API_DIR, 'module_admin/graphql/logout/schema.graphql'), {
        loaders: [
            new GraphQLFileLoader()
        ]
    });

    const resolvers = {
        Mutation: {
            adminLogout: async (_: object, _args: {}, context: GraphQLContext): Promise<{logout: Boolean}> => {
                context.res.clearCookie('adminToken', {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'lax',
                    path: '/admin/'
                });

                return {
                    logout: !context.req.cookies.adminToken
                }
            }
        }
    };

    return addResolversToSchema({
        schema,
        resolvers
    });
}

const admin_logout = create_logout_admin_schema();

export default admin_logout;
