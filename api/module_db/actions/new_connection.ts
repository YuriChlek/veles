import dotenv from 'dotenv';
import {Client} from 'pg';
import {ConnectionType} from "../types/ConnectionType";

dotenv.config();

const connectionOptions: ConnectionType = {
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || '',
    port: parseInt(process.env.DB_PORT || '5432'),
    database: process.env.DATABASE || ''
}

const dbConnection = new Client(connectionOptions);

(async () => {
    await dbConnection.connect();
})();

export default dbConnection;
