import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "openapiv1.json",
  output: "packages/sdk/src/client",
  plugins: ["@hey-api/client-fetch"],
});
