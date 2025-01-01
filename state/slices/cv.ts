import { create, StoreApi, UseBoundStore } from "zustand";
import { CvStore } from "../interfaces/cvEditor/interfaces";

const cvStore: UseBoundStore<StoreApi<CvStore>> = create<CvStore>(
    (set): CvStore => ({
        cvData: {
            photo: "",
            givenName: "",
            familyName: "",
            headline: "",
            phoneNumber: "",
            email: "",
            location: "",
            linkedin: "",
        },
        setCvField: <K extends keyof CvStore["cvData"]>(
            field: K,
            value: CvStore["cvData"][K],
        ) =>
            set((state) => ({
                cvData: {
                    ...state.cvData,
                    [field]: value,
                },
            })),
    }),
);

export default cvStore;
