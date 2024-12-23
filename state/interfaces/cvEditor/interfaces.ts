export interface CvStore {
    photo: string;
    firstName: string;
    lastName: string;
    headline: string;
    phoneNumber: string;
    email: string;
    location: string;
    linkedin: string;
    setCvPhoto: (data: string) => void;
    setFirstName: (data: string) => void;
    setLastName: (data: string) => void;
    setHeadline: (data: string) => void;
    setPhoneNumber: (data: string) => void;
    setEmail: (data: string) => void;
    setLocation: (data: string) => void;
    setLinkedin: (data: string) => void;
}
