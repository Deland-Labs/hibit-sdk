import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'openapi.json',
  output: 'src/openapi',
  plugins: ['@hey-api/client-fetch']
});
