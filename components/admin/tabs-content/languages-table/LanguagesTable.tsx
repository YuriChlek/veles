"use client";

import React from "react";
import _t from "@/utils/translations/translation";
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
import type { LanguageType } from "@/interfaces/admin/languages/interfaces.ts";

const LanguagesTable: React.FC<{ rows: Array<LanguageType> }> = ({ rows = [] }) => {
    return (
        rows.length > 0 && (
            <TableContainer
                sx={{
                    borderRadius: 0,
                    boxShadow: 0,
                    border: "1px solid #0000001E",
                    width: "100%",
                }}
                component={Paper}
            >
                <Table size="small" aria-label="a dense table">
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
                                {_t("Default Frontend")}
                            </TableCell>
                            <TableCell
                                className={styles["admin-languages-header"]}
                                align="center"
                            >
                                {_t("Default Admin")}
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
                        {rows.map((row) => (
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
                                    {row.default_frontend_language ? "Yes" : "No"}
                                </TableCell>
                                <TableCell
                                    className={styles["admin-languages-cell"]}
                                    align="center"
                                >
                                    {row.default_admin_language ? "Yes" : "No"}
                                </TableCell>
                                <TableCell
                                    className={styles["admin-languages-cell"]}
                                    align="center"
                                >
                                    <button>{"Settings"}</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    );
};

export default LanguagesTable;
