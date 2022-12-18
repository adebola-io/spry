import { items } from "~~/data/testing";

export default defineEventHandler((event) => {
   const { req } = event;
   if (req.method === "GET") {
      return <HomeSection>{
         heading: "Deals of the Day",
         subHeading: "Get the best deals for the day.",
         items: items.slice(-6).reverse(),
      };
   }
});
