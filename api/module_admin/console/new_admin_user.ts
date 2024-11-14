import createAdminUser from "../actions/create/admin_user";
import type { AdminUser } from "../interfaces/admin_user";
import { v4 as uuidv4 } from "uuid";

(async (): Promise<void> => {
    const args: Array<string> = process.argv.slice(2);
    const userData: Record<string, string> = args.reduce(
        (acc, item) => {
            const [key, value] = item.split("=");
            acc[key] = value;
            return acc;
        },
        {} as Record<string, string>,
    );
    const { login, password, email, first_name, last_name } = userData;

    if (login && password && email) {
        const options: AdminUser = {
            admin_id: uuidv4(),
            login: login,
            password: password,
            email: email,
            first_name: first_name || "",
            last_name: last_name || "",
            role: "admin",
        };

        try {
            await createAdminUser(options);
            process.exit(0);
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    } else {
        console.error("Unable to create user because the fields login, password, and email are required.");
        process.exit(1);
    }
})();
