import * as argon2 from "argon2";
import dbConnection from "../../../module_db/actions/create/new_connection";
import type { AdminUser } from "../../interfaces/admin_user";
import verifyAdminUserIsCreated from "../verify/admin_user_is_created";
import { ADMIN_USER_DB } from "../../../module_db/constants/db_constants";

const createAdminUser = async (userOptions: AdminUser): Promise<void> => {
    const query = `
            INSERT INTO ${ADMIN_USER_DB} (admin_id, login, password, email, first_name, last_name, role)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            ;
        `;

    const password = await argon2.hash(userOptions.password);

    const values = [userOptions.admin_id, userOptions.login, password, userOptions.email, userOptions.first_name, userOptions.last_name, userOptions.role];

    try {
        const userIsCreated = await verifyAdminUserIsCreated(userOptions.login);

        if (!userIsCreated) {
            await dbConnection.query(query, values);
            console.log(`The ${userOptions.login} user has been successfully created.`);
            return;
        }

        console.log(`The ${userOptions.login} user already exists.`);
    } catch (error) {
        console.error(error);
    }
};

export default createAdminUser;
