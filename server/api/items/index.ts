import { items } from "@/data/testing";

export default defineEventHandler((event) => {
   if (event.req.method === "GET") {
      return items;
   }
});
