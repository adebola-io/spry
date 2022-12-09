import { sections } from "~~/data/testing";

export default defineEventHandler(({ req }) => {
   if (req.method === "GET") {
      return sections;
   }
});
