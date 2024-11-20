import type { Request, Response, NextFunction } from "express";
import { createHandler } from "graphql-http/lib/use/express";
import admin_logout from "@api/module_admin/graphql/logout/admin_logout.ts";

const adminLogoutHandler = async (req: Request, res: Response, next: NextFunction) => {
    const admin_logout_schema = await admin_logout;

    return createHandler({
        schema: admin_logout_schema,
        context: () => ({ req, res }),
    })(req, res, next);
};

export default adminLogoutHandler;
