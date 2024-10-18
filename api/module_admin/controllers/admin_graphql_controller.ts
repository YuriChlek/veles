import { Request, Response, NextFunction, Router } from 'express';
import loginAdminHandler from "../graphql/login/admin_login_handler";
import verifyAdminTokenHandler from "../graphql/verify_token/verify_admin_token_handler";

const adminGraphqlRouter = Router();

adminGraphqlRouter.post('/graphql/admin_login', (req: Request, res: Response, next: NextFunction) => {
    return loginAdminHandler(req as Request, res as Response, next as NextFunction);
});

adminGraphqlRouter.post('/graphql/admin_verify_token', (req: Request, res: Response, next: NextFunction) => {
    return verifyAdminTokenHandler(req as Request, res as Response, next as NextFunction);
});

export default adminGraphqlRouter;
