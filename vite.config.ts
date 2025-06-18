import { defineConfig } from 'vite';
import { resolve } from 'path';
import typescript from '@rollup/plugin-typescript';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isExample = mode === 'example';

  return {
    base: isExample ? './' : '/',
    publicDir: isExample ? 'example/public' : 'public',
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        src: resolve(__dirname, 'src')
      }
    },
    define: {
      self: 'globalThis'
    },
    build: {
      lib: isExample
        ? undefined
        : {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'HibitSdk',
            // the proper extensions will be added
            fileName: 'hibit-sdk'
          },
      assetsDir: isExample ? 'assets' : 'assets',
      commonjsOptions: {
        transformMixedEsModules: true,
        include: [/node_modules/]
      },
      rollupOptions: {
        plugins: [
          typescript(
            isExample
              ? {
                  target: 'es2020',
                  rootDir: resolve(__dirname),
                  // declaration: true,
                  // declarationDir: resolve(__dirname, 'docs'),
                  exclude: [resolve(__dirname, 'node_modules/**'), resolve(__dirname, 'test/**')],
                  tsconfig: resolve(__dirname, 'tsconfig.json'),
                  allowSyntheticDefaultImports: true
                }
              : {
                  target: 'es2020',
                  rootDir: resolve(__dirname, 'src'),
                  declaration: true,
                  declarationDir: resolve(__dirname, 'dist'),
                  exclude: [resolve(__dirname, 'node_modules/**'), resolve(__dirname, 'test/**')],
                  tsconfig: resolve(__dirname, 'tsconfig.json'),
                  allowSyntheticDefaultImports: true
                }
          )
        ]
      },
      outDir: isExample ? 'docs' : 'dist',
      emptyOutDir: true
    },
    server: {
      port: 3000
    },
    test: {
      watch: false,
      testTimeout: 10000,
      environment: 'node'
    }
  };
});
