import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'ping_pong_app',
      filename: 'remoteEntry.js',
      exposes: {
        './PingPongApp': './src/App.tsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
})
