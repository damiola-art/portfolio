import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // Updated to match GitHub repository name
  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.png"],
})