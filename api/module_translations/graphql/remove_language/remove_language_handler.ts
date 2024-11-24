import type { Request, Response, NextFunction } from "express";
import { createHandler } from "graphql-http/lib/use/express";
import remove_language from "@api/module_translations/graphql/remove_language/remove_language.ts";

const removeLanguageHandler = async (req: Request, res: Response, next: NextFunction) => {
    const remove_language_schema = await remove_language;
    return createHandler({
        schema: remove_language_schema,
        context: () => ({ req, res }),
    })(req, res, next);
};

export default removeLanguageHandler;
