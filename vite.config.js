import { defineConfig } from 'vite';
import sass from 'vite-plugin-sass';
 
export default defineConfig({
  plugins: [sass()],
  build: {
    minify: false,
    terserOptions: {
      compress: false,
      mangle: false,
      output: {
        comments: true,
      },
    },
  },
});