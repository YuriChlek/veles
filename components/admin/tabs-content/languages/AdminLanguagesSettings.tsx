"use client";

import React from "react";
import Paper from "@mui/material/Paper";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Button from "@/components/base/button-base/Button.tsx";
import _t from "@/utils/translations/translation.ts";
import styles from "./admin.languages.settings.module.scss";

function createData(language: string, languageCode: string, isDefaultFrontend: boolean, isDefaultAdmin: boolean) {
    return { language, languageCode, isDefaultFrontend, isDefaultAdmin };
}

const rows = [createData("English", "en", true, false), createData("German", "de", false, true), createData("France", "fr", false, false)];

const AdminLanguagesSettings: React.FC = () => {
    return (
        <>
            <div className={styles["admin-languages-settings-row"]}>
                <Button blueColor={true}>{_t("Add Language")}</Button>
            </div>

            <h2 className={styles["admin-languages-article"]}>{_t("Edit Languages")}</h2>
            <TableContainer sx={{ borderRadius: 0, boxShadow: 0, border: "1px solid #0000001E" }} component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={styles["admin-languages-header"]} align="center">
                                {_t("Store View")}
                            </TableCell>
                            <TableCell className={styles["admin-languages-header"]} align="center">
                                {_t("Language Code")}
                            </TableCell>
                            <TableCell className={styles["admin-languages-header"]} align="center">
                                {_t("Default Frontend")}
                            </TableCell>
                            <TableCell className={styles["admin-languages-header"]} align="center">
                                {_t("Default Admin")}
                            </TableCell>
                            <TableCell className={styles["admin-languages-header"]} align="center">
                                {_t("Action")}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.languageCode} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell className={styles["admin-languages-cell"]} align="center" component="th" scope="row">
                                    {_t(row.language)}
                                </TableCell>
                                <TableCell className={styles["admin-languages-cell"]} align="center">
                                    {row.languageCode}
                                </TableCell>
                                <TableCell className={styles["admin-languages-cell"]} align="center">
                                    {row.isDefaultFrontend ? _t("Yes") : _t("No")}
                                </TableCell>
                                <TableCell className={styles["admin-languages-cell"]} align="center">
                                    {row.isDefaultAdmin ? _t("Yes") : _t("No")}
                                </TableCell>
                                <TableCell className={styles["admin-languages-cell"]} align="center">
                                    <button>{_t("Settings")}</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default AdminLanguagesSettings;
