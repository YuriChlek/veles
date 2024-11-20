import dbConnection from "@api/module_db/actions/create/new_connection.ts";

const verifyHasTable = async (tableName: string): Promise<boolean> => {
    const query = `
        SELECT EXISTS (SELECT
                       FROM information_schema.tables
                       WHERE table_schema = 'public'
                         AND table_name = $1);
    `;
    const client = await dbConnection.connect();

    try {
        const res = await client.query(query, [tableName]);
        const [{ exists }] = res.rows;
        await client.release();

        return exists;
    } catch (error) {
        console.error(error);
        await client.release();

        return false;
    }
};

export default verifyHasTable;
