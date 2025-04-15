import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Include specific polyfills for crypto and buffer
      include: ['buffer', 'process', 'util', 'stream'],
    }),
  ],
  base: '/my-resume-site/',
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      buffer: 'buffer',
      stream: 'stream-browserify',
    },
  },
  define: {
    'process.env': {},
    global: 'globalThis',
  },
});
