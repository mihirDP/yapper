import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  // daisyui: {
  //   themes: ["emerald", "dark"], // ✅ Correct way to define themes
  // },
  server: {
    port: 3000,
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:5041",
        changeOrigin: true,
      },
    },
  },
});
