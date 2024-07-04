import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: 'vant',
          replaceOldImport: false,
          style(name) {
            return `vant/es/${name}/style/index`
          },
        },
      ],
    }),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,ts,vue}"', // for example, lint .ts & .tsx
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
