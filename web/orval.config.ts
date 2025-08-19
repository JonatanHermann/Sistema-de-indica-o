import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: `${process.env.NEXT_PUBLIC_API_URL}/docs/json`,
    output: {
      target: "./src/http/api.ts",
      client: "fetch",
      httpClient: "fetch",
      clean: true,
      baseUrl: process.env.NEXT_PUBLIC_API_URL,

      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
});
