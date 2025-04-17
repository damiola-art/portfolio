import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/react-portifolo/',  // Add this line - use your repo name
  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.png"],
})