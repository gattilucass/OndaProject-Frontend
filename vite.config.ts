import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Apunta a la nueva carpeta src
      "@assets": path.resolve(__dirname, "public", "assets"), // Apunta a la nueva carpeta public/assets
    },
  },
  // La raíz del proyecto ahora es la misma que la carpeta donde está vite.config.ts
  // No se necesita especificar 'root' si está en la raíz del proyecto
  build: {
    outDir: path.resolve(__dirname, "dist"), // Construirá a una carpeta 'dist' en la raíz
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});