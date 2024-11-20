import dotenv from "dotenv";
import { Pool } from "pg";
import type { ConnectionType } from "@api/module_db/types/connection_type.ts";

dotenv.config();

const connectionOptions: ConnectionType = {
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    host: process.env.DB_HOST || "",
    port: parseInt(process.env.DB_PORT || "5432"),
    database: process.env.DATABASE || "",
};

const dbConnection = new Pool(connectionOptions);

export default dbConnection;
