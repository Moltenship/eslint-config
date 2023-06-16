import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      fileName: format => `index.${format === 'es' ? 'mjs' : 'js'}`,
      entry: path.join(__dirname, 'index.ts'),
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: [
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        'eslint-plugin-import',
        'eslint-plugin-vitest'
      ],
    },
  },
  plugins: [
    dts({
      outputDir: path.join(__dirname, 'dist'),
      root: path.join(__dirname, '..'),
      entryRoot: __dirname,
      include: [
        path.join(__dirname, 'index.ts'),
      ],
    }),
  ],
})