import { type Knex, knex as setupKnex } from "knex";
import fs from "node:fs";
import path from "node:path";

import { env } from "../utils/env";

const dbDir = path.resolve(__dirname, "tmp");
fs.mkdirSync(dbDir, { recursive: true });

const connection =
  env.DATABASE === "sqlite3"
    ? {
        filename: path.join(dbDir, env.DATABASE)
      }
    : env.DATABASE;

export const config: Knex.Config = {
  client: env.DB_CLIENT,
  connection,
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: path.resolve(__dirname, "migrations")
  }
};

export const knex = setupKnex(config);
