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
