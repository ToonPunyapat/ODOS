import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import removeConsole from 'vite-plugin-remove-console';
import obfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig({
  server: {
    port: 3000, // ตั้งค่าพอร์ตที่ต้องการ
    host: '127.0.0.1', 
  },
  plugins: [
    react(),
    removeConsole(),
    obfuscator({
      globalOptions: {
        debugProtection: true,
        disableConsoleOutput: true,
      },
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: {
        properties: {
          regex: /^_/,
        },
      },
    },
  },
});
