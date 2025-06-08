import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Quando sua aplicação React fizer uma requisição para '/api'
      '/v1/usernames/users': {
        target: 'https://users.roblox.com', // <--- SUBSTITUA PELA URL REAL DA API EXTERNA
        changeOrigin: true, // Necessário para que o host da requisição seja o da API externa
        // secure: false, // Use se a API externa for HTTPS e você tiver problemas de certificado em dev
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' do caminho antes de enviar para a API externa
      },
    },
  },
})
