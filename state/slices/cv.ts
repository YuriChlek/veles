import { create, StoreApi, UseBoundStore } from "zustand";
import { CvStore } from "../interfaces/cvEditor/interfaces";

const cvStore: UseBoundStore<StoreApi<CvStore>> = create<CvStore>(
    (set): CvStore => ({
        photo: "",
        firstName: "",
        lastName: "",
        headline: "",
        phoneNumber: "",
        email: "",
        location: "",
        linkedin: "",
        setCvPhoto: (data: string) => set({ photo: data }),
        setFirstName: (data: string) => set({ firstName: data }),
        setLastName: (data: string) => set({ lastName: data }),
        setHeadline: (data: string) => set({ headline: data }),
        setPhoneNumber: (data: string) => set({ phoneNumber: data }),
        setEmail: (data: string) => set({ email: data }),
        setLocation: (data: string) => set({ location: data }),
        setLinkedin: (data: string) => set({ linkedin: data }),
    }),
);

export default cvStore;
