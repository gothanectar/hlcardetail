import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    // Adiciona estas configurações para garantir que os caminhos dos assets estejam corretos
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  preview: {
    port: 5000,
    open: true,
    // Configuração para o modo preview funcionar corretamente
    host: true,
    strictPort: true,
  },
  // Configuração para garantir que o Vite sirva o SPA corretamente
  appType: 'spa',
  // Configuração para lidar com rotas do React Router
  define: {
    'process.env': {}
  }
})
