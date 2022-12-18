import { defineConfig } from "cypress";

export default defineConfig({
   e2e: {
      baseUrl: "http://localhost:3000",
      setupNodeEvents(on, config) {
         // implement node event listeners here
      },
   },

   viewportHeight: 1117,
   viewportWidth: 1728,
});
