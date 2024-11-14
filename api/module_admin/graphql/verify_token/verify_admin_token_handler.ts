import type { Request, Response, NextFunction } from "express";
import { createHandler } from "graphql-http/lib/use/express";
import verify_token from "@api/module_admin/graphql/verify_token/verify_token.ts";

const verifyAdminTokenHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const verify_admin_token_schema = await verify_token;

    return createHandler({
        schema: verify_admin_token_schema,
        context: () => ({ req, res }),
    })(req, res, next);
};

export default verifyAdminTokenHandler;
