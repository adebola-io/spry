/** All types relating to a single item. */
declare namespace Item {
   export type Category =
      | "shirts & trousers"
      | "shoes"
      | "accessories"
      | "formal wear"
      | "dresses & gowns"
      | "jackets & hoodies";

   export type RGBColor = [number, number, number];

   /**
    * A product review.
    */
   export interface Review {
      userId: string;
      /** Content could include emojis and textual abbreviations. Like how the general populace talks on the internet. */
      content: string | null;
      rating: 1 | 2 | 3 | 4 | 5;
      date: string;
   }

   export interface Discount {
      name: string;
      percent: number;
   }

   export interface Price {
      /** Never integers, always decimals. */
      value: number;
      currency: "USD" | "NGN" | "CAD";
      discount: Discount | null;
   }

   /** A single product item. */
   export interface Unit {
      id: string;
      /** Very detailed identifier for the item, e.g. 'Yellow Male Short-Sleeve Linen Shirt with Mandarin Collar' or 'Men's Pink Floral Beach Shirt' or 'Brown Fostello Leather Bag' or 'Sneakers White Male Size 14' */
      name: string;
      /** The date this product was added to the database, in the format of an ISO string. The date should be any day between June and December 2022, preferrably around business hours. */
      added: string;
      category: Category;
      /** More detail about the item, should be at least 100 words long. */
      description: string;
      /** A lightened version of the color of the item. */
      theme: RGBColor;
      imageId: string;
      /** The number of units sold in the last month. */
      sales: number;
      /** The number of units left. */
      quantity: number;
      /** At least 10 tags. */
      tags: string[];
      /** At least 3 reviews. */
      reviews: Review[];
      price: Price;
   }
}
