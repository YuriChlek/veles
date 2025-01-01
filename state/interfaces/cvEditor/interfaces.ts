export interface CvStore {
    photo: string;
    givenName: string;
    familyName: string;
    headline: string;
    phoneNumber: string;
    email: string;
    location: string;
    linkedin: string;
    setCvPhoto: (data: string) => void;
    setGivenName: (data: string) => void;
    setFamilyName: (data: string) => void;
    setHeadline: (data: string) => void;
    setPhoneNumber: (data: string) => void;
    setEmail: (data: string) => void;
    setLocation: (data: string) => void;
    setLinkedin: (data: string) => void;
}
