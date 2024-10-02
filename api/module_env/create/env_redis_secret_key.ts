import path from "node:path";
import fs from "node:fs";
import crypto from "crypto";
import {__ENV_FILE} from "../../module_path/constants/path_constants";

const createEnvRedisSecretKey = () => {
    const envPath = path.join(__dirname, '../../../.env');
    console.log(__ENV_FILE);
    fs.access(envPath, fs.constants.F_OK, (err) => {
        if (!err) {
            const secretKey = crypto.randomBytes(32).toString('hex');
            const envRedisSecretKey = `\n# REDIS\nREDIS_SECRET_KEY=${secretKey}\n`;
            console.log(envRedisSecretKey);
            fs.appendFile(__ENV_FILE, envRedisSecretKey, err => {
                if (err) console.log(err.message)
            })
        }
    });
}

export default createEnvRedisSecretKey;
