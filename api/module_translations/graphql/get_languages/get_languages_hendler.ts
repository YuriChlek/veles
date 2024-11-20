import type { Request, Response, NextFunction } from "express";
import { createHandler } from "graphql-http/lib/use/express";
import get_languages from "@api/module_translations/graphql/get_languages/get_languages.ts";

const getLanguagesHandler = async (req: Request, res: Response, next: NextFunction) => {
    const languages_schema = await get_languages;

    return createHandler({
        schema: languages_schema,
        context: () => ({ req, res }),
    })(req, res, next);
};

export default getLanguagesHandler;
