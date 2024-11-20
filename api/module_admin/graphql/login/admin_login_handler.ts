import type { Request, Response, NextFunction } from "express";
import { createHandler } from "graphql-http/lib/use/express";
import admin_login from "@api/module_admin/graphql/login/admin_login.ts";

const loginAdminHandler = async (req: Request, res: Response, next: NextFunction) => {
    const admin_login_schema = await admin_login;

    return createHandler({
        schema: admin_login_schema,
        context: () => ({ req, res }),
    })(req, res, next);
};

export default loginAdminHandler;
