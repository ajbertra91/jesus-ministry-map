import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tanstackRouterVite from '@tanstack/router-plugin/vite';

export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), '')
  const port = env.PORT ? Number(env.PORT) : undefined

  return defineConfig({
    base: '/',
    plugins: [
      react(),
      tanstackRouterVite({
          target: 'react',
          autoCodeSplitting: true,
        }),
    ],
    server: {
      port: port ?? 5173,
    },
  })
}
