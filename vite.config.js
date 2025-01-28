import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import monkey from 'vite-plugin-monkey';
import { join } from 'path';
// --------------------
import { config } from './userscript.config.js';
// --------------------
import css from 'rollup-plugin-css-only';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true
  },
  plugins: [
    css({ output: 'public/build/vendor.css' }),
    svelte(),
    monkey({
      entry: 'src/main.js',

      // NOTE: 详细油猴文件头配置见 ./userscript.config.js
      userscript: config
    })
  ],
  resolve: {
    alias: {
      '@': join(__dirname, 'src')
    }
  }
});
