import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://siddartha03.github.io/my-portfolio/",
  plugins: [react()],
});
