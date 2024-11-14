import path from "node:path";
import fs from "node:fs";
import crypto from "crypto";
import { __ENV_FILE } from "../../../constants/path/path_constants";

const createTokenEnvSecretKey = () => {
    const envPath = path.join(__dirname, "../../../.env");

    fs.access(envPath, fs.constants.F_OK, (err) => {
        if (!err) {
            const secretKey = crypto.randomBytes(32).toString("hex");
            const envRedisSecretKey = `\n# TOKEN\nTOKEN_SECRET_KEY=${secretKey}\n`;

            fs.appendFile(__ENV_FILE, envRedisSecretKey, (err) => {
                if (err) console.log(err.message);
            });
        }
    });
};

export default createTokenEnvSecretKey;
