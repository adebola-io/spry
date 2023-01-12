import { Ref } from "vue";

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

export function useImageObserver() {
   const observer = ref<IntersectionObserver | null>(null);

   onMounted(async () => {
      if (process.client && document.readyState === "complete") {
         const images = document.querySelectorAll(
            "img[data-src]"
         ) as NodeListOf<HTMLImageElement>;
         if ("IntersectionObserver" in window) {
            observer.value = new IntersectionObserver((entries, observer) => {
               entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                     const { target }: { target: HTMLImageElement } =
                        entry as any;
                     target.src = target.dataset.src ?? "";
                     observer.unobserve(target);
                  }
               });
            });
            images.forEach((image) => {
               observer.value?.observe(image);
            });
         } else {
            images.forEach((image) => {
               image.src = image.dataset.src ?? "";
            });
         }
      }
   });
   onUnmounted(() => {
      observer.value?.disconnect();
      observer.value = null;
   });
}

const daysOfWeek = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
];
const monthsOfYear = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];

export function useDateFromNow<T extends number[]>(...days: T) {
   const currentDate = ref(new Date());

   const getFormattedDate = (date: Date) => {
      return `${daysOfWeek[date.getDay()]}, ${
         monthsOfYear[date.getMonth()]
      } ${date.getDate()}`;
   };

   const result: string[] = [];
   for (let i = 0; i < days.length; i++) {
      const day = ref(
         new Date(currentDate.value.getTime() + days[i] * 24 * 60 * 60 * 1000)
      );
      result.push(getFormattedDate(day.value));
   }

   return result;
}
