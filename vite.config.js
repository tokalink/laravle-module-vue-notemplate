import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import fs from 'fs';
import path from 'path';

// Dynamically find all modules
const moduleDirs = fs.readdirSync('Modules').map(dir => `Modules/${dir}/js/app.js`);

export default defineConfig({
  plugins: [
    vue(),
    laravel({
      input: [
        'resources/js/app.js',
        ...moduleDirs
      ],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
      'Modules': path.resolve(__dirname, 'Modules'),
    },
  },
});
