import { collections } from "~~/data/testing";
/**
 * Returns all collections from the api.
 */
export default defineEventHandler((event) => {
   const { method } = event.req;
   if (method === "GET") {
      return collections.map((collection) => ({
         ...collection,
         items: undefined,
      })) as CollectionSummary[];
   }
});
