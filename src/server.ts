import { app } from "./app/app";
import { env } from "./utils/env";

/**
 * Listen
 */
app
  .listen({
    port: env.PORT,
    host: env.HOST
  })
  .then((host) => {
    // eslint-disable-next-line no-console
    console.log(`🔥 Server started at ${host}`);
  });
