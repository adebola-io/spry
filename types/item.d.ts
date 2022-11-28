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
      name: string;
      /** The date this product was added to the database. */
      added: string;
      category: Category;
      theme: RGBColor;
      imageId: string;
      /** The number of units sold in the last month. */
      sales: number;
      /** The number of units left. */
      quantity: number;
      tags: string[];
      reviews: Review[];
      price: Price[];
   }
}
