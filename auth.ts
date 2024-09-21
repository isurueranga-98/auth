// import NextAuth from "next-auth"
 
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [],
// })






import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"
import {db} from "@/lib/db"
import authConfig from "@/auth.config"

export const { handlers : {GET, POST}, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})