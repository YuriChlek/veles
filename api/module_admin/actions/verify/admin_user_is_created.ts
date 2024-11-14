import dbConnection from "@api/module_db/actions/create/new_connection";
import verifyHasTable from "@api/module_db/actions/check/has_table";
import createAdminUserTable from "@api/module_admin/actions/create/admin_user_table.ts";
import { ADMIN_USER_DB } from "@api/module_db/constants/db_constants.ts";

const verifyAdminUserIsCreated = async (login: string): Promise<boolean> => {
    const query: string = `SELECT EXISTS (SELECT 1 FROM ${ADMIN_USER_DB} WHERE login = $1)`;

    try {
        const hasAdminUsersTable = await verifyHasTable(ADMIN_USER_DB);

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
        console.error(error);

        return false;
    }
};

export default verifyAdminUserIsCreated;
