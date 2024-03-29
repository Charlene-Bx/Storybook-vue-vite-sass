import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {find: "@cmp", replacement: path.resolve(__dirname, './src/components')},
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/index.scss";
        `
      }
    }
  }
});
