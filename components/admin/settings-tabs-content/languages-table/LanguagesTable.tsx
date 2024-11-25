"use client";

import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import styles from "./admin.languages.table.module.scss";
import useLanguagesStore from "@/state/slices/languages.ts";
import useVelesTranslation from "@/utils/translations/translation";
import RemoveLanguageButton from "@/components/admin/settings-tabs-content/remove-language/RemoveLanguage.tsx";

const LanguagesTable: React.FC = () => {
    const _t = useVelesTranslation();
    const { currentLanguages } = useLanguagesStore();

    return (
        <TableContainer
            sx={{
                borderRadius: 0,
                boxShadow: 0,
                border: "1px solid #0000001E",
                width: "100%",
            }}
            component={Paper}
        >
            <Table size="small" aria-label="languages table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            className={styles["admin-languages-header"]}
                            align="center"
                        >
                            {_t("Language view")}
                        </TableCell>
                        <TableCell
                            className={styles["admin-languages-header"]}
                            align="center"
                        >
                            {_t("Language Code")}
                        </TableCell>
                        <TableCell
                            className={styles["admin-languages-header"]}
                            align="center"
                        >
                            {_t("Frontend language")}
                        </TableCell>
                        <TableCell
                            className={styles["admin-languages-header"]}
                            align="center"
                        >
                            {_t("Admin language")}
                        </TableCell>
                        <TableCell
                            className={styles["admin-languages-header"]}
                            align="center"
                        >
                            {_t("Action")}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentLanguages.map((row) => (
                        <TableRow
                            key={row.language_code}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell
                                className={styles["admin-languages-cell"]}
                                align="center"
                                component="th"
                                scope="row"
                            >
                                {row.language_view}
                            </TableCell>
                            <TableCell
                                className={styles["admin-languages-cell"]}
                                align="center"
                            >
                                {row.language_code}
                            </TableCell>
                            <TableCell
                                className={styles["admin-languages-cell"]}
                                align="center"
                            >
                                {row.frontend_language ? _t("Yes") : _t("No")}
                            </TableCell>
                            <TableCell
                                className={styles["admin-languages-cell"]}
                                align="center"
                            >
                                {row.admin_language ? _t("Yes") : _t("No")}
                            </TableCell>
                            <TableCell
                                className={styles["admin-languages-cell"]}
                                align="center"
                            >
                                <RemoveLanguageButton
                                    language_code={row.language_code}
                                    isDisable={currentLanguages.length === 1}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LanguagesTable;
