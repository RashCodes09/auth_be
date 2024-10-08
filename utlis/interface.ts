import { Document } from "mongoose";
interface iUser {
  name: string;
  email: string;
  password: string;
  verifyToken: string;
  verify: boolean;
}
export interface iUserData extends iUser, Document {}
