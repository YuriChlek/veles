import { Router } from "express";
import type { Request, Response, NextFunction } from "express";
import loginAdminHandler from "@api/module_admin/graphql/login/admin_login_handler.ts";
import verifyAdminTokenHandler from "@api/module_admin/graphql/verify_token/verify_admin_token_handler.ts";
import adminLogoutHandler from "@api/module_admin/graphql/logout/admin_logout_handler.ts";

const adminGraphqlRouter = Router();

adminGraphqlRouter.post(
    "/graphql/admin_login",
    (req: Request, res: Response, next: NextFunction) => {
        return loginAdminHandler(
            req as Request,
            res as Response,
            next as NextFunction,
        );
    },
);

adminGraphqlRouter.post(
    "/graphql/admin_verify_token",
    (req: Request, res: Response, next: NextFunction) => {
        return verifyAdminTokenHandler(
            req as Request,
            res as Response,
            next as NextFunction,
        );
    },
);

adminGraphqlRouter.post(
    "/graphql/admin_logout",
    (req: Request, res: Response, next: NextFunction) => {
        return adminLogoutHandler(
            req as Request,
            res as Response,
            next as NextFunction,
        );
    },
);

export default adminGraphqlRouter;
