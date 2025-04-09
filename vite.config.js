import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // React plugin for JSX/TSX support
    tailwindcss(), // Tailwind CSS plugin
  ],
});
