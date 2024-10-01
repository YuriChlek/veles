import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT: string = process.env.API_PORT || '5000';

const app = express();

app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`));
