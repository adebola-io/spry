import { categories } from "~~/data/testing";

export default defineEventHandler((event) => {
   const { method } = event.req;
   if (method === "GET") {
      return categories;
   }
});
