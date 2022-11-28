import { collections } from "~~/data/testing";

export default defineEventHandler((event) => {
   const { method } = event.req;
   if (method === "GET") {
      return collections
         .map((collection) => ({ ...collection, items: undefined }))
         .filter((collection) => collection.isFeatured) as CollectionSummary[];
   }
});
