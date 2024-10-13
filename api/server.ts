import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import createTokenEnvSecretKey from "./module_env/create/env_token_secret_key";
import {TOKEN_SECRET_KEY, API_PORT} from "../constants/env/env_constants";
import loginAdminHandler from "./module_admin/graphql/login/admin_login_handler";

(async (): Promise<void> => {
    if (!TOKEN_SECRET_KEY) {
        createTokenEnvSecretKey();
    }

    const corsOptions = {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true
    }
    const PORT: string = API_PORT || '5000';
    const app = express();
    app.use(cookieParser()); //???
    app.use(cors(corsOptions));

    /* Винести створення  graphql у окрему функцію */
    app.post('/graphql/admin_login', (req: Request, res: Response, next: NextFunction) => {
        return loginAdminHandler(req as Request, res as Response, next as NextFunction);
    });
    /* ------------------------------------------- */

    app.listen(PORT, () => console.log(`Server Connected to http://localhost:${PORT}`));
})()
