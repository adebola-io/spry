declare interface Collection {
   name: string;
   description: string;
   banner: string;
   items: Item.Unit[];
}

/**
 * Returned by `/api/collections`
 */
declare interface CollectionSummary extends Omit<Collection, "items"> {}
