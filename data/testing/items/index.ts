import mens_suits from "./mens_suits.json";
import womens_jackets from "./womens_jackets.json";

export const items = [
   ...mens_suits,
   ...womens_jackets,
] as unknown as Item.Unit[];
