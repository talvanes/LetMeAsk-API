import postgres from "postgres";
import { env } from "../env.ts";

export const sql = postgres(env.DATABASE_URL);

const result = await sql`SELECT 'HELLO' as message`
console.log(result)