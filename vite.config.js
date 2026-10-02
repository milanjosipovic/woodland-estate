import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  // Only use /woodland-estate/ subpath when building for production (GitHub Pages)
  const isGitHubPages = mode === "production";

  return {
    base: isGitHubPages ? "/woodland-estate/" : "/",

    plugins: [tailwindcss()],

    build: {
      rollupOptions: {
        input: {
          main: resolve(import.meta.dirname, "index.html"),
          en: resolve(import.meta.dirname, "en/index.html"),
          ru: resolve(import.meta.dirname, "ru/index.html"),
          zh: resolve(import.meta.dirname, "zh/index.html"),
        },
      },
    },
  };
});
