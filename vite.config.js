import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base to your GitHub repo name: '/your-repo-name/'
// Example: if your repo is github.com/username/trustpulse-website -> base: '/trustpulse-website/'
// For a custom domain or root deployment, use base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/trustpulse-website/',
})
