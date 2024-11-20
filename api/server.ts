import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import createTokenEnvSecretKey from "./module_env/create/env_token_secret_key";
import { TOKEN_SECRET_KEY, API_PORT } from "../constants/env/env_constants";
import adminGraphqlRouter from "./module_admin/controllers/admin_graphql_controller";
import languagesGraphqlRouter from "@api/module_translations/controllers/languages_graphql_controller.ts";
import createDbTables from "@api/module_db/actions/create/create_db_tables.ts";

(async (): Promise<void> => {
    await createDbTables();

    if (!TOKEN_SECRET_KEY) {
        createTokenEnvSecretKey();
    }

    const corsOptions = {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
    };
    const PORT: string = API_PORT || "5000";
    const app = express();

    app.use(cookieParser()); //???
    app.use(cors(corsOptions));
    /* Graphql routers */
    app.use(adminGraphqlRouter);
    app.use(languagesGraphqlRouter);

    app.listen(PORT, () => console.log(`Server Connected to http://localhost:${PORT}`));
})();
