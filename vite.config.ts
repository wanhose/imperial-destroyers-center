import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const isTest = process.env.NODE_ENV === 'test';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react(), tsconfigPaths(), ...(isTest ? [] : [TanStackRouterVite()])],
  publicDir: './src/assets',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
};
