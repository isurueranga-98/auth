// import { handlers } from "@/auth" // Referring to the auth.ts we just created
// export const { GET, POST } = handlers






export {GET, POST} from "@/auth" // Referring to the auth.ts we just created
export const runtime = 'edge' // This is the default value, you can change it to 'blocking' or 'server' if you want to.