import type { Request, Response, NextFunction } from "express";
import { createHandler } from "graphql-http/lib/use/express";
import set_language_view from "@api/module_translations/graphql/set_language_view/set_language_view.ts";

const setLanguageViewHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const set_language_schema = await set_language_view;

    return createHandler({
        schema: set_language_schema,
        context: () => ({ req, res }),
    })(req, res, next);
};

export default setLanguageViewHandler;
