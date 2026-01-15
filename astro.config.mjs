// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://iwilliamsweb.github.io/iwilliams/',          // your lowercase GitHub username
  base: '/iwilliams/',                        // your repo name with leading and trailing slash, e.g. '/portfolio/'
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',                                // ensure static build (default, but good to add)
});
