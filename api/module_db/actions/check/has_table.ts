import dbConnection from "../create/new_connection";

const verifyHasTable = async (tableName: string): Promise<boolean> => {
    const query = `
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = $1
    );
  `;

    try {
        const res = await dbConnection.query(query, [tableName]);
        const [{ exists }] = res.rows;

        return exists;
    } catch (error) {
        console.error(error);

        return false;
    }
};

export default verifyHasTable;
