import { items } from "~~/data/testing";
import { getRelatedItems } from "~~/utils";

export default defineEventHandler((event) => {
   const { method } = event.req;
   if (method === "GET") {
      const { id } = getRouterParams(event);
      const item = items.find((item) => item.id === id);
      if (item === undefined) {
         throw createError({
            statusCode: 404,
            message: "Could not find product item.",
         });
      }
      const relatedItems = getRelatedItems(item, items);
      const associatedItems = items
         .filter(
            (i) =>
               i !== item &&
               i.category === item.category &&
               !relatedItems.includes(i)
         )
         .slice(0, 10);
      return associatedItems;
   }
});
