import { collections } from "~~/data/testing";

export default defineEventHandler((event) => {
   const { method } = event.req;
   if (method === "GET") {
      const { id } = getRouterParams(event),
         collection = collections.find((collection) => collection.id === id);
      if (collection) {
         return collection;
      } else {
         throw createError({
            fatal: false,
            message: "Invalid collection id.",
            cause: "Received an id that does not match existing collections",
            statusCode: 404,
         });
      }
   }
});
