import React from "react";
import Label from "@/components/base/label/Label.tsx";
import Input from "@/components/base/input/Input.tsx";
import useVelesTranslation from "@/utils/translations/translation.ts";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CvDatePicker from "@/components/frontend/cv-editor-app/components/CvDatePicker.tsx";
import Button from "@/components/base/button-base/Button.tsx";
import styles from "../sections.module.scss";

const EducationSection: React.FC = (): React.JSX.Element => {
    //const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
    const _t = useVelesTranslation();

    return (
        <section className={styles["form-section"]}>
            <h2 className={styles["section-title"]}>{_t("Education")}</h2>
            <div className={styles["form-group-section"]}>
                <div className={styles["form-group"]}>
                    <Label className={styles["label"]} htmlFor="institution">
                        {_t("Institution")}
                    </Label>
                    <Input
                        className={styles["input"]}
                        type="text"
                        id="institution"
                        name="institution"
                    />
                </div>

                <div className={styles["form-group"]}>
                    <Label className={styles["label"]} htmlFor="degree">
                        {_t("Degree")}
                    </Label>
                    <Input
                        className={styles["input"]}
                        id="degree"
                        type="text"
                        name="degree"
                    />
                </div>
            </div>

            <div className={styles["form-group-section"]}>
                <div className={styles["form-group"]}>
                    <Label className={styles["label"]} htmlFor="city">
                        {_t("City")}
                    </Label>
                    <Input
                        className={styles["input"]}
                        id="city"
                        type="text"
                        name="city"
                    />
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className={styles["form-group-section"]}>
                        <div className={styles["form-group"]}>
                            <Label className={styles["label"]}>{_t("Start date")}</Label>
                            <CvDatePicker />
                        </div>
                        <div className={styles["form-group"]}>
                            <Label className={styles["label"]}>{_t("End date")}</Label>
                            <CvDatePicker />
                        </div>
                    </div>
                </LocalizationProvider>
            </div>

            <Button type="button">{_t("Add Education")}</Button>
        </section>
    );
};

export default EducationSection;
