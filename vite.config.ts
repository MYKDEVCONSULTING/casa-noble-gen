import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// `lovable-tagger` removed. If you need component tagging, re-add a replacement tool here.

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Removed development-only component tagger (previously `lovable-tagger`).
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
