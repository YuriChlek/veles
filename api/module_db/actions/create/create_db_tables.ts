import createTranslationsDb from "@api/module_translations/actions/create/create_translations_db.ts";
import createAdminUserTable from "@api/module_admin/actions/create/admin_user_table.ts";

const createDbTables = async (): Promise<void> => {
    try {
        await createAdminUserTable();
        await createTranslationsDb();
    } catch (error) {
        console.error(error);
    }
};

export default createDbTables;
