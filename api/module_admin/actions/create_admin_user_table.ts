import dbConnection from "../../module_db/actions/new_connection";

const createAdminUserTable = async (): Promise<void> => {
    const tableName: string = 'admin_users'
    const createAdminTableQuery: string = `
        CREATE TABLE IF NOT EXISTS ${tableName} (
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
        console.error(error)
    }
}

export default createAdminUserTable;
