import cookies from "@fastify/cookie";
import cors from "@fastify/cors";
import fastify from "fastify";

export const app = fastify();

/**
 * Cookies
 */
app.register(cookies);

/**
 * Cors
 */
app.register(cors);

/**
 * Routes
 */
import { mealsRoutes } from "../routes/meals.routes";

app.register(mealsRoutes, {
  prefix: "meals"
});
