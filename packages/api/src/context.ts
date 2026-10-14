import type { Session } from "@ukulele-code-gen/auth";
import type { Database } from "@ukulele-code-gen/db";

export type Context = {
  session: Session | null;
  db: Database;
};
