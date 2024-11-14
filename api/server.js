"use strict";
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_2 = require("graphql-http/lib/use/express");
const env_token_secret_key_1 = __importDefault(require("./module_env/create/env_token_secret_key"));
const env_constants_1 = require("../constants/env/env_constants");
const admin_login_1 = __importDefault(require("./module_admin/graphql/login/admin_login"));
if (!env_constants_1.TOKEN_SECRET_KEY) {
    (0, env_token_secret_key_1.default)();
}
const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
};
const start_server = () =>
    __awaiter(void 0, void 0, void 0, function* () {
        const PORT = env_constants_1.API_PORT || "5000";
        const app = (0, express_1.default)();
        const admin_login_schema = yield admin_login_1.default;
        app.use((0, cors_1.default)(corsOptions));
        app.all("/graphql/admin_login", (0, express_2.createHandler)({ schema: admin_login_schema }));
        app.listen(PORT, () => console.log(`Server Connected to http://localhost:${PORT}`));
    });
start_server();
