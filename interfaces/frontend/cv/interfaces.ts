export interface CvHeaderInterface {
    photo?: string;
    givenName?: string;
    familyName?: string;
    headline?: string;
    email?: string;
    phoneNumber?: string;
    location?: string;
}

export interface CvDataInterface extends CvHeaderInterface {
    linkedin?: string;
    dateOfBirth?: string;
    website?: string;
    nationality?: string;
}
