import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'openapiv1.json',
  output: 'src/openapi',
  plugins: ['@hey-api/client-fetch']
});
