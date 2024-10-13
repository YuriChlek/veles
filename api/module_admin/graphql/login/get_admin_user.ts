import dbConnection from "../../../module_db/actions/create/new_connection";
import {ADMIN_USER_DB} from "../../../module_db/constants/db_constants";
import {BaseAdminUser} from "../../interfaces/admin_user";

const getAdminUser = async (login: string, password: string): Promise<BaseAdminUser> => {
    const query = `SELECT admin_id, login, email, first_name, last_name, role  
                    FROM ${ADMIN_USER_DB} 
                    WHERE login = $1 AND password = $2 LIMIT 1;`;

    try {
        const result = await dbConnection.query(query, [login, password]);
        return result.rows[0];
    } catch (err) {
        console.error('Error querying the database:', err);
        throw err;
    }
}

export default getAdminUser;
