import { defineConfig } from 'vite';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        privacy: './privacy-policy.html',
        tos: './tos.html',
      },
    },
  },
  plugins: [
    {
      name: 'copy-config',
      closeBundle() {
        const outDir = resolve(__dirname, 'dist');
        if (!existsSync(outDir)) {
          mkdirSync(outDir, { recursive: true });
        }
        copyFileSync(
          resolve(__dirname, 'config.js'),
          resolve(outDir, 'config.js')
        );
      }
    }
  ]
});
