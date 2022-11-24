declare module global {
   export interface Item {
      name: string;
      color: number;
      description: string;
      sales: number;
      image: string;
      price: {
         value: number;
         currency: string;
         discount: {
            name: string;
            percent: number;
         } | null;
      };
      added: Date;
      quantity: number;
      tags: string;
      reviews: Array<{
         userId: string;
         content: string;
         rating: number;
         date: Date;
      }>;
   }
}
