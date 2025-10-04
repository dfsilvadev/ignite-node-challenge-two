import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["src/**/*.{test,spec}.{ts,js}"],
    coverage: {
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/coverage/**",
        "**/*.config.js",
        "**/*.d.ts",
        "src/server.ts",
        "src/mocks/**",
        "src/utils/logger.js",
        "src/database/**"
      ],
      reporter: ["text", "json", "html"]
    }
  }
});
