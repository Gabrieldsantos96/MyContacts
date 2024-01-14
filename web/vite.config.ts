/// <reference types="vitest"/>
/// <reference types="vite/client"/>
/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  resolve: {
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components')
      },
      { find: '@lib', replacement: path.resolve(__dirname, './src/lib') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      {
        find: '@templates',
        replacement: path.resolve(__dirname, './src/templates')
      },
      { find: '@test', replacement: path.resolve(__dirname, './src/test') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      {
        find: '@queryHooks',
        replacement: path.resolve(__dirname, './src/queryHooks')
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, './src/services')
      },
      {
        find: '@interfaces',
        replacement: path.resolve(__dirname, './src/interfaces')
      }
    ]
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    coverage: {
      all: false,
      provider: 'v8',
      exclude: [
        'src/queryHooks/**/*',
        'src/services/**/*',
        'src/test/**/*',
        'src/utils/config/**'
      ]
    },
    exclude: ['node_modules'],
    setupFiles: ['src/test/setup-vitest.ts']
  }
})
