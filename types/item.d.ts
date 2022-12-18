/** All types relating to a single item. */
declare namespace Item {
   export type Category =
      | "shirts & trousers"
      | "shoes"
      | "formal wear"
      | "dresses & gowns"
      | "jackets & hoodies";

   export type RGBColor = [number, number, number];

   /**
    * A product review.
    */
   export interface Review {
      userId: string;
      content: string | null;
      rating: 1 | 2 | 3 | 4 | 5;
      date: string;
   }

   export interface Discount {
      name: string;
      percent: number;
   }

   export interface Price {
      value: number;
      currency: "USD" | "NGN" | "CAD";
      discount: Discount | null;
   }

   /** A single product item. */
   export interface Unit {
      id: string;
      /** Very detailed identifier for the item, e.g. 'Men's Pink Floral Beach Shirt' */
      name: string;
      /** The date this product was added to the database, in the format of an ISO string. The date should be any day between June and December 2022. */
      added: string;
      category: Category;
      /** More detail about the item, should be at least 100 words long. */
      description: string;
      /** A light version of the color of the item. */
      theme: RGBColor;
      imageId: string;
      /** The number of units sold in the last month. */
      sales: number;
      /** The number of units left. */
      quantity: number;
      /** At least 5 tags. */
      tags: string[];
      /** At least 3 reviews. */
      reviews: Review[];
      price: Price;
   }
}
