import dbConnection from "../../../module_db/actions/create/new_connection";
import {ADMIN_USER_DB} from "../../../module_db/constants/db_constants";
import type { AdminUser } from "../../interfaces/admin_user";

const getAdminUser = async (login: string): Promise<AdminUser> => {
    const query = `SELECT admin_id, login, password, email, first_name, last_name, role  
                    FROM ${ADMIN_USER_DB} 
                    WHERE login = $1 LIMIT 1;`;

    try {
        const result = await dbConnection.query(query, [login]);

        return result.rows[0];
    } catch (err) {
        console.error('Error querying the database:', err);
        throw err;
    }
}

export default getAdminUser;
