import { items } from "~~/data/testing";
import { getRelatedItems } from "~~/utils";

export default defineEventHandler((event) => {
   if (event.req.method === "GET") {
      const { id } = getRouterParams(event);
      const item = items.find((item) => item.id === id);
      if (item === undefined) {
         throw createError({
            statusCode: 404,
            message: "Could not find item.",
         });
      } else {
         return getRelatedItems(item, items);
      }
   }
});
