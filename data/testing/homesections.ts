import { items } from "./items";

export const sections: HomeSection[] = [
   {
      heading: "Trending Items",
      subHeading:
         "Get the most popular items in the store before they are sold out.",
      items: items.slice(0, 12),
   },
   {
      heading: "New Arrivals",
      subHeading: "Fresh styles just added to the store!",
      items: items.filter((item) => new Date(item.added).getMonth() > 10),
   },
   {
      heading: "Best Sellers",
      subHeading: "These are the top-rated and top-selling items in the store!",
      items: items.filter((item) => item.sales > 100),
   },
   {
      heading: "Sale Items",
      subHeading: "Don't miss out on these discounted styles!",
      items: [],
   },
];
