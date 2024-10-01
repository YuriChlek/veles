import dbConnection from "../../module_db/actions/new_connection";
import hasTable from "../../module_db/actions/has_table";
import createAdminUserTable from "./create_admin_user_table";

const adminUserIsCreated = async (login: string): Promise<boolean> => {
    const table: string = 'admin_users';
    const query: string = `SELECT EXISTS (SELECT 1 FROM ${table} WHERE login = $1)`;

    try {
        const hasAdminUsersTable = await hasTable(table);

        if (!hasAdminUsersTable) {
           await createAdminUserTable();
            return false;
        }

        if (hasAdminUsersTable) {
            const res = await dbConnection.query(query, [login]);
            const [{ exists }] = res.rows;

            return exists;
        }

        return false;
    } catch (error) {
        console.error(error)

        return false;
    }
}

export default adminUserIsCreated;
