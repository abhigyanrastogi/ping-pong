import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  preview: {
    port: 5174,
    cors: true,
  },
  plugins: [
    react(),
    federation({
      name: 'ping_pong_app',
      filename: 'remoteEntry.js',
      manifest: true,
      exposes: {
        './PingPongApp': './src/App.tsx',
      },
    })
  ],
})
