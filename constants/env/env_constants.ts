import * as dotenv from "dotenv";

const isEdgeRuntime = process.env.NEXT_RUNTIME === "edge";

if (!isEdgeRuntime) {
    dotenv.config();
}

//API
export const API_PORT: string = process.env.NEXT_PUBLIC_API_PORT as string;
export const API_HOST: string = process.env.NEXT_PUBLIC_API_HOST as string;

//DB
export const DB_HOST: string = process.env.DB_HOST as string;
export const DB_PORT: string = process.env.DB_PORT as string;
export const DB_USER: string = process.env.DB_USER as string;
export const DB_PASSWORD: string = process.env.DB_PASSWORD as string;
export const DATABASE: string = process.env.DATABASE as string;

//JWT
export const TOKEN_SECRET_KEY: string = process.env.TOKEN_SECRET_KEY as string;
