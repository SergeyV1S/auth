import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@shared": path.resolve(__dirname, "./src/shared")
    }
  },
  server: {
    allowedHosts: ["localhost"],
    port: 5173,
    proxy: {
      "/api": {
        changeOrigin: true,
        secure: false,
        target: "http://localhost:4000"
      }
    },
    strictPort: true
  },
  envPrefix: ["VITE_", "BASE_"]
});
