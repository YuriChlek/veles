import { Router } from "express";
import type { Request, Response, NextFunction } from "express";
import getLanguagesHandler from "@api/module_translations/graphql/get_languages/get_languages_hendler.ts";
import setLanguageHandler from "@api/module_translations/graphql/set_language/set_language_hendler.ts";
import removeLanguageHandler from "@api/module_translations/graphql/remove_language/remove_language_handler.ts";

const languagesGraphqlRouter = Router();

languagesGraphqlRouter.post(
    "/graphql/get_languages",
    (req: Request, res: Response, next: NextFunction) => {
        return getLanguagesHandler(req as Request, res as Response, next as NextFunction);
    },
);

languagesGraphqlRouter.post(
    "/graphql/set_language",
    (req: Request, res: Response, next: NextFunction) => {
        return setLanguageHandler(req as Request, res as Response, next as NextFunction);
    },
);

languagesGraphqlRouter.post(
    "/graphql/remove_language",
    (req: Request, res: Response, next: NextFunction) => {
        return removeLanguageHandler(
            req as Request,
            res as Response,
            next as NextFunction,
        );
    },
);

export default languagesGraphqlRouter;
