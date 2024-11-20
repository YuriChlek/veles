import dbConnection from "@api/module_db/actions/create/new_connection";
import { ADMIN_USER_DB } from "@api/module_db/constants/db_constants.ts";
import type { AdminUser } from "@api/module_admin/interfaces/admin_user.ts";

const getAdminUser = async (login: string): Promise<AdminUser> => {
    const query = `SELECT admin_id, login, password, email, first_name, last_name, role  
                    FROM ${ADMIN_USER_DB} 
                    WHERE login = $1 LIMIT 1;`;
    const client = await dbConnection.connect();

    try {
        const result = await client.query(query, [login]);

        return result.rows[0];
    } catch (err) {
        console.error("Error querying the database:", err);
        throw err;
    } finally {
        client.release();
    }
};

export default getAdminUser;
