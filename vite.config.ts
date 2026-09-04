import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy S3 requests to avoid CORS issues in development
      '/s3-proxy': {
        target: 'https://sim-playback-test-data.s3.us-west-2.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/s3-proxy/, ''),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            // Remove origin header to avoid CORS preflight issues
            proxyReq.removeHeader('origin');
          });
        },
      },
    },
  },
})
