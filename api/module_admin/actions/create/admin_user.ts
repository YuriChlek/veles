import * as argon2 from "argon2";
import dbConnection from "@api/module_db/actions/create/new_connection.ts";
import { AdminUser } from "@api/module_admin/interfaces/admin_user.ts";
import verifyAdminUserIsCreated from "@api/module_admin/actions/verify/admin_user_is_created.ts";
import { ADMIN_USER_DB } from "@/api/module_db/constants/db_constants.ts";

const createAdminUser = async (userOptions: AdminUser): Promise<void> => {
    const query = `
            INSERT INTO ${ADMIN_USER_DB} (admin_id, login, password, email, first_name, last_name, role)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            ;
        `;

    const password = await argon2.hash(userOptions.password);

    const values = [
        userOptions.admin_id,
        userOptions.login,
        password,
        userOptions.email,
        userOptions.first_name,
        userOptions.last_name,
        userOptions.role,
    ];

    const client = await dbConnection.connect();

    try {
        const userIsCreated = await verifyAdminUserIsCreated(userOptions.login);

        if (!userIsCreated) {
            await client.query(query, values);
            console.log(`The ${userOptions.login} user has been successfully created.`);
            return;
        }

        console.log(`The ${userOptions.login} user already exists.`);
    } catch (error) {
        console.error(error);
    } finally {
        await client.release();
    }
};

export default createAdminUser;
