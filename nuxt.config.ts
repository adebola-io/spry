// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   vite: {
      devBundler: "legacy",
   },
   modules: ["@nuxtjs/tailwindcss"],
   typescript: {
      shim: false,
   },
});
