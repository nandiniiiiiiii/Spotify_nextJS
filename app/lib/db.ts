//create you schema, migrate db, create client
//npx prisma migrate dev
//npx prisma generate

import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();
//this is so that we can put data in the actual table/db