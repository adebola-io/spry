import { items } from "./items";
import { Randomizer } from "@/utils";

const random = new Randomizer(items);

export const sections: HomeSection[] = [
   {
      heading: "Trending Items",
      subHeading:
         "Get the most popular items in the store before they are sold out.",
      items: random.selectUniquely(9),
   },
   {
      heading: "New Arrivals",
      subHeading: "Fresh styles just added to the store!",
      items: items.filter((item) => new Date(item.added).getMonth() > 9),
   },
   {
      heading: "Best Sellers",
      subHeading: "These are the top-rated and top-selling items in the store!",
      items: random.selectUniquely(9),
   },
   {
      heading: "Sale Items",
      subHeading: "Don't miss out on these discounted styles!",
      items: items.filter((item) => item.price.discount !== null),
   },
   {
      heading: "May We Suggest",
      subHeading: "Items that we know you'll love.",
      items: random.selectUniquely(9),
   },
];
