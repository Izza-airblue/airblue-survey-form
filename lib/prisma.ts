import "dotenv/config";
import { PrismaMssql } from "@prisma/adapter-mssql";
import { PrismaClient } from "../generated/prisma/client";

const sqlConfig = {
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  server: process.env.HOST!,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
  connectionTimeout: 40000,

};

const adapter = new PrismaMssql(sqlConfig);
const prisma = new PrismaClient({ adapter });

export { prisma };
