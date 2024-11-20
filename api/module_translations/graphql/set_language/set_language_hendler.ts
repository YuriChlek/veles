import type { Request, Response, NextFunction } from "express";
import { createHandler } from "graphql-http/lib/use/express";
import set_language from "@api/module_translations/graphql/set_language/set_language.ts";

const setLanguageHandler = async (req: Request, res: Response, next: NextFunction) => {
    const set_language_schema = await set_language;

    return createHandler({
        schema: set_language_schema,
        context: () => ({ req, res }),
    })(req, res, next);
};

export default setLanguageHandler;
