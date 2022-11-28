declare interface Collection {
   id: string;
   name: string;
   description: string;
   banner: string;
   items: Item.Unit[];
   isFeatured: boolean;
}

/**
 * Returned by `/api/collections`
 */
declare interface CollectionSummary extends Omit<Collection, "items"> {}
