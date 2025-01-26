import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages'; // Ensure correct import

export default defineConfig({
  plugins: [react()],
  base: '/refokuss/', // Replace with your GitHub repository name
});
