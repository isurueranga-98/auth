import { UserRole } from "@prisma/client";
import  {DefaultSession} from "next-auth"

export type ExtendedUser = DefaultSession["user"] & {
 
  role : UserRole;
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}


// import {jwt} from "@auth/core/jwt"

// declare module "@auth/core/jwt" {
//   interface JWT {
//     role? : "ADMIN" | "USER";
//   }
// }