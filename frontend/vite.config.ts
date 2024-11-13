import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
})


/*
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), TanStackRouterVite()],
  server: {
    port: 5173, // Yerel ortamda kullanmak istediğin port
    host: 'localhost', // Veya '0.0.0.0' eğer dış bağlantılara izin vermek istersen
    open: true, // Tarayıcıyı otomatik olarak açmak istersen
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
}));


*/