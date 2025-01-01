export interface CvStore {
    cvData: {
        photo: string;
        givenName: string;
        familyName: string;
        headline: string;
        phoneNumber: string;
        email: string;
        location: string;
        linkedin: string;
    };
    setCvField: <K extends keyof CvStore["cvData"]>(
        field: K,
        value: CvStore["cvData"][K],
    ) => void;
}
