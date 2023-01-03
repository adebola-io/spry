/**
 * A pseudo-iterator that can retrieve random elements from an array.
 */
export class Randomizer<T> {
   constructor(arr: Array<T>) {
      this.__initArray = arr;
   }
   /** Elements already called, and the number of times they have been called. */
   private __retrieved: [number, number][] = [];
   private __rounds = 0;
   private __initArray;
   /** Creates a new array with random elements from the initial array. */
   select(length = 1) {
      const random: T[] = [];
      for (let i = 0; i < length; i++) {
         // Pick an index to select.
         const index = Math.floor(Math.random() * this.__initArray.length);
         if (!random.includes(this.__initArray[index])) {
            random.push(this.__initArray[index]);
         }
      }
      // this.__rounds++;
      return random;
   }
   /** Creates a new array with random elements from the initial array. It keeps track of how many times it is called so it can reduce the number of repetitions. */
   selectUniquely(length = 1) {
      const random: T[] = [];
      this.__rounds++;
      while (random.length < length) {
         // Pick an index to select.
         const index = Math.floor(Math.random() * this.__initArray.length);
         if (!random.includes(this.__initArray[index])) {
            // Check if the element has been selected before.
            const id = this.__retrieved.find((i) => i[0] === index);
            if (id === undefined) {
               random.push(this.__initArray[index]);
               // Mark the element as selected.
               this.__retrieved.push([index, 0]);
            } else if (id[1] < this.__rounds) {
               id[1]++;
               random.push(this.__initArray[index]);
            }
         }
      }
      return random;
   }
}

/**
 * Change the first letter of each word in a string to uppercase.
 * @param input The string to capitalize.
 * @returns
 */
export function capitalize(input: string) {
   return input
      .split(" ")
      .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join(" ");
}

export function lightenColor(theme: Item.RGBColor, units = 20) {
   return `rgb(${theme
      .map((point) => (point + units < 255 ? point + units : 255))
      .join(" ")})`;
}

export function darkenColor(theme: Item.RGBColor, units = 20) {
   return `rgb(${theme
      .map((point) => (point - units > 0 ? point - units : 0))
      .join(" ")})`;
}

export function calculatePrice(price: Item.Price) {
   const currency = price.currency === "NGN" ? "N" : "$";
   if (price.discount) {
      return (
         currency +
         (price.value - (price.value * price.discount.percent) / 100)
            .toFixed(2)
            .toString()
      );
   } else return currency + price.value.toString();
}

export function compareItems(obj1: Item.Unit, obj2: Item.Unit): number {
   const tags1 = obj1.tags;
   const tags2 = obj2.tags;

   // Create a set of tags1 to remove items more efficiently
   const tags1Set = new Set(tags1);

   // Count the number of matching tags
   let numMatchingTags = 0;
   for (const tag of tags2) {
      // Check if the tag is a synonym of a tag in tags1
      if (
         tags1Set.has(tag) ||
         (tag === "male" && tags1Set.has("man")) ||
         (tag === "man" && tags1Set.has("male")) ||
         (tag === "female" && tags1Set.has("woman")) ||
         (tag === "woman" && tags1Set.has("female")) ||
         (tag === "cold" && tags1Set.has("winter")) ||
         (tag === "winter" && tags1Set.has("cold"))
      ) {
         numMatchingTags++;
      }
   }

   // Calculate the percentage of tags that match
   let similarity = (numMatchingTags / tags1.length) * 100;

   // Increase similarity if the objects have the same category
   if (obj1.category === obj2.category) {
      similarity += 25;
   }

   // Cap similarity at 100%
   if (similarity > 100) {
      similarity = 100;
   }

   return similarity;
}

export function getRelatedItems(reference: Item.Unit, array: Item.Unit[]) {
   return [...array]
      .sort((a, b) => compareItems(reference, b) - compareItems(reference, a))
      .slice(1, 11);
}
