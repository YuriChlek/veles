import type { JwtPayload } from "jsonwebtoken";

export type DecodedAdminToken = JwtPayload & {
    admin_id: string;
    role: string;
};
