import { items } from "./items";

export const sections: HomeSection[] = [
   {
      heading: "Trending Items",
      subHeading:
         "Get the most popular items in the store before they are sold out.",
      items: items,
   },
   {
      heading: "Deals of the Day",
      subHeading: "",
      items: [],
   },
   {
      heading: "Black Friday Sales",
      subHeading: "",
      items: items.filter(
         (item) => item.price.discount?.name === "Black Friday"
      ),
   },
   {
      heading: "Jackets",
      subHeading: "",
      items: [],
   },
];
