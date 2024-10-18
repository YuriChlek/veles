import { Request, Response, NextFunction } from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import verify_token from "./verify_token";

const verifyAdminTokenHandler = async (req: Request, res: Response, next: NextFunction) => {
    const verify_admin_token_schema = await verify_token;

    return createHandler({
        schema: verify_admin_token_schema,
        context: () => ({ req, res }),
    })(req, res, next);
};

export default verifyAdminTokenHandler;
