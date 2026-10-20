import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
  return {
    // Since you are using a root custom domain (prodajaimanjauzice.rs),
    // the base path must always be root ("/")
    base: "/",

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
