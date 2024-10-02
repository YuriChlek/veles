import express from 'express';
import * as dotenv from 'dotenv';
import createEnvRedisSecretKey from "./module_env/create/env_redis_secret_key";

dotenv.config();

if (!process.env.REDIS_SECRET_KEY) {
    createEnvRedisSecretKey();
}

const PORT: string = process.env.API_PORT || '5000';

const app = express();

app.get('/', (req, res) => {
    res.send(`Server Connected to http://localhost:${PORT}`);
})

app.listen(PORT, () => console.log(`Server Connected to http://localhost:${PORT}`));
