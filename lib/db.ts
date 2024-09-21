// import {PrismaClient} from "@prisma/client";

// declare global {
//   let prisma: PrismaClient | undefined;
// }

// export const db = globalThis.prisma || new PrismaClient ();

// if(process.env.NODE_ENV !== "production") globalThis.prisma = db;


import { PrismaClient } from "@prisma/client";

// Function to create a new PrismaClient instance
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Declare `globalThis` to include `prismaGlobal` property for type safety
declare const globalThis: {
  prismaGlobal: PrismaClient | undefined;
} & typeof global;

// Create the PrismaClient instance or reuse the existing one in `globalThis`
export const db = globalThis.prismaGlobal ?? prismaClientSingleton();

// In development mode, save the PrismaClient instance to `globalThis` to avoid multiple instances
if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = db;
}

export default db;
