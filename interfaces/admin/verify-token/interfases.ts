export interface VerifyAdminToken {
    verifyToken: {
        verify: boolean
    },
    errors?: Array<{
        message: string;
    }>
}