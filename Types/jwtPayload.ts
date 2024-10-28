import { JwtPayload } from "jwt-decode";

export interface CustomJwtPayload extends JwtPayload {
  username: string;
  number: number;
}
