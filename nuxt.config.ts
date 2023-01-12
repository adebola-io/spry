// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   dev: process.env.NODE_ENV !== "production",
   vite: {
      devBundler: "legacy",
   },
   modules: ["@nuxtjs/tailwindcss"],
   typescript: {
      shim: false,
   },
});
