import { ComputedRef, Ref } from "nuxt/dist/app/compat/capi";

/**
 * Nuxt composable that creates an `HH:MM:SS` countdown to the end of the day.
 */
export function useTimeLeftInDay() {
   // Define a reactive variable to store the number of hours left in the day
   const hoursLeft = ref(0),
      minutesLeft = ref(0),
      secondsLeft = ref(0),
      now = new Date(),
      millisecondsSinceStartOfDay =
         now.getHours() * 1000 * 60 * 60 +
         now.getMinutes() * 1000 * 60 +
         now.getSeconds() * 1000 +
         now.getMilliseconds(),
      millisecondsLeftInDay = 86400000 - millisecondsSinceStartOfDay;
   hoursLeft.value = Math.floor(millisecondsLeftInDay / (1000 * 60 * 60));
   minutesLeft.value = Math.floor((millisecondsLeftInDay / (1000 * 60)) % 60);
   secondsLeft.value = Math.floor((millisecondsLeftInDay / 1000) % 60);

   // Update the values for the hours, minutes, and seconds left in the day every second
   setInterval(() => {
      // Decrement the number of seconds left in the day
      secondsLeft.value -= 1;

      // If the number of seconds left in the day reaches 0, decrement the number of minutes left in the day and reset the seconds
      if (secondsLeft.value < 0) {
         minutesLeft.value -= 1;
         secondsLeft.value = 59;
      }

      // If the number of minutes left in the day reaches 0, decrement the number of hours left in the day and reset the minutes
      if (minutesLeft.value < 0) {
         hoursLeft.value -= 1;
         minutesLeft.value = 59;
      }
   }, 1000);

   // Return a computed value with the time left in the day formatted as 'HH:MM:SS'
   return computed(() => {
      return `${hoursLeft.value.toString().padStart(2, "0")}:${minutesLeft.value
         .toString()
         .padStart(2, "0")}:${secondsLeft.value.toString().padStart(2, "0")}`;
   });
}
