import { items } from "~~/data/testing";

export default defineEventHandler((event) => {
   if (event.req.method === "GET") {
      const params = getRouterParams(event);
      const item = items.find((item) => item.id === params.id);
      if (item !== undefined) {
         return item;
      } else {
         throw createError({
            statusCode: 404,
            message: "Invalid item id",
            fatal: false,
            cause: "The item id parameter does not match an existing item.",
         });
      }
   }
});
