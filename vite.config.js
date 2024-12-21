import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@translation': path.resolve(__dirname, 'public/locales'),
      '@hook': path.resolve(__dirname, 'src/hook'),
    },
  },
  build: {
    outDir: 'build',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
      },
    },
  },
  base: '/sitoPolle/',
  server: {
    port: 3000,
    historyApiFallback: true,
  },
})
