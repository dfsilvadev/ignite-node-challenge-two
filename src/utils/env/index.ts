import { config } from "dotenv";

import { z } from "zod";

if (process.env.NODE_ENV === "test") {
  config({
    path: ".env.test.local"
  });
} else {
  config();
}

const envSchema = z.object({
  PORT: z.coerce.number().default(3001),
  HOST: z.string().default("0.0.0.0"),
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  DATABASE: z.string().default("app.db"),
  DB_CLIENT: z.string().default("sqlite3")
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  // eslint-disable-next-line no-console
  console.error("Invalid environment variables!", _env.error.format());

  throw new Error("Invalid environment variables!");
}

export const env = _env.data;
