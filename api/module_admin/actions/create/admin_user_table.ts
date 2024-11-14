import dbConnection from "@api/module_db/actions/create/new_connection";
import { ADMIN_USER_DB } from "@api/module_db/constants/db_constants.ts";

const createAdminUserTable = async (): Promise<void> => {
    const createAdminTableQuery: string = `
        CREATE TABLE IF NOT EXISTS ${ADMIN_USER_DB} (
            id SERIAL PRIMARY KEY,
            admin_id VARCHAR(40),
            login VARCHAR(128),
            password VARCHAR(128),
            email VARCHAR(128),
            first_name VARCHAR(128),
            last_name VARCHAR(128),
            role VARCHAR(32)
        )`;

    try {
        await dbConnection.query(createAdminTableQuery);
    } catch (error) {
        console.error(error);
    }
};

export default createAdminUserTable;
