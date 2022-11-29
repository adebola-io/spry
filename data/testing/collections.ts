import { items } from "./items";

export const collections: Collection[] = [
   {
      id: "abcd123",
      name: "Test Collection 1",
      banner: "banner_image.jpg",
      description: "This is a test collection.",
      items: [],
      isFeatured: true,
   },
   {
      id: "efgh4567",
      name: "Test Collection 2",
      banner: "banner_image_2.jpg",
      description: "This is another test collection.",
      items: [items[0]],
      isFeatured: true,
   },
];
