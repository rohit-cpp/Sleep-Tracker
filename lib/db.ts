/* eslint-disable no-var */
import { PrismaClient } from "@prisma/client";

// Declare global variable for development hot-reloading
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
