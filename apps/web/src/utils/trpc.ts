import { createTRPCContext } from "@trpc/tanstack-react-query";
import type { AppRouter } from "@ukulele-code-gen/api/routers/index";

export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>();
