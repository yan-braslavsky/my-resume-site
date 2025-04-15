import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: resolve('node_modules/crypto-browserify'),
    },
  },
  optimizeDeps: {
    include: ['crypto-browserify'],
  },
  define: {
    'process.env.NODE_DEBUG': JSON.stringify(''),
    // Add other necessary Node.js globals for crypto
    global: 'globalThis',
  },
});
