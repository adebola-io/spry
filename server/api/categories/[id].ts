import { categories } from "~~/data/testing";

export default defineEventHandler((event) => {
   if (event.req.method === "GET") {
      const { id } = getRouterParams(event),
         category = categories.find((category) => category.id === id);
      if (category === undefined) {
         throw createError({
            fatal: false,
            message: "Invalid Category ID",
            cause: "Received an id that does not match existing categories",
            statusCode: 404,
         });
      } else return category;
   }
});
