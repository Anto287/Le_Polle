import { defineConfig } from 'vite'
import { visualizer } from "rollup-plugin-visualizer";
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react(), visualizer()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@translation': path.resolve(__dirname, 'src/locales'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  build: {
    cssCodeSplit: true,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        globals: {
          react: 'React'
        }
      },
    },
  },
  base: '/Le_Polle/',
  server: {
    port: 3000,
    historyApiFallback: true,
  },
});