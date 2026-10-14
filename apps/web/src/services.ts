import { createAuth as createConfiguredAuth } from "@ukulele-code-gen/auth";
import { type Database, createDb } from "@ukulele-code-gen/db";

import { ENV } from "./env.server";

export function getDb(): Database {
  return createDb(ENV);
}
export async function createAuth(database?: Database) {
  return createConfiguredAuth(ENV, database ?? (await getDb()));
}
