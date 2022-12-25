<template>
   <header class="fixed top-0 w-full z-[99] bg-cream-pink">
      <div
         :class="[
            'h-[120px] max-md:h-[88px] max-sm:h-[70px] px-[2vw] max-sm:px-[3vw] flex items-center justify-between relative max-md:justify-center ',
         ]"
      >
         <NuxtLink to="/" class="h-full flex items-center max-md:absolute">
            <img
               id="header-logo"
               src="~~/public/logo.svg"
               alt="Spry"
               class="h-[54.29px] max-sm:h-[50%]"
            />
         </NuxtLink>

         <div
            id="header-controls"
            class="flex justify-between items-center w-[33vw] max-w-[800px] min-w-[600px] max-md:hidden"
         >
            <form
               @focusin="searchIsFocused = true"
               @focusout="searchIsFocused = false"
               :class="[
                  { 'bg-pale-pink': searchIsFocused },
                  'flex items-center pr-5 border-[3px] rounded-[15px] border-fandago overflow-hidden w-[80%]',
               ]"
            >
               <input
                  type="search"
                  placeholder="Search for products, categories, etc..."
                  class="h-[48.78px] w-[90%] bg-transparent pl-5 focus-visible:bg-pale-pink focus-visible:outline-0 placeholder:text-fandago placeholder:opacity-[0.5] font-bold text-fandago"
               />
               <img
                  class="ml-2 cursor-pointer"
                  src="~~/assets/svg/Search.svg"
                  alt="Search"
               />
            </form>
            <NuxtLink to="/user/wishlist">
               <img
                  src="~~/assets/svg/Wishlist.svg"
                  class="h-[30px]"
                  alt="Wishlist"
               />
            </NuxtLink>
            <NuxtLink to="/user/cart">
               <img src="~~/assets/svg/Cart.svg" class="h-[30px]" alt="Cart" />
            </NuxtLink>
            <NuxtLink to="/user/profile">
               <img
                  src="~~/assets/svg/Profile.svg"
                  class="h-[30px]"
                  alt="Profile"
               />
            </NuxtLink>
         </div>

         <div
            id="sidebar-btn"
            @click="sidebarIsOpen = !sidebarIsOpen"
            class="md:hidden flex flex-col cursor-pointer justify-center h-[50%] aspect-square absolute left-[2vw] max-sm:left-[3vw]"
         >
            <div
               v-for="index in 3"
               :key="index"
               :class="[
                  { 'w-[40%]': index === 2, 'bg-dark-purple': sidebarIsOpen },
                  'h-[3px] w-[75%] duration-300 bg-fandago my-[9%] rounded-[2px]',
               ]"
            ></div>
         </div>
         <img
            @click="triggerSearch().then(() => searchBar?.focus())"
            src="~~/assets/svg/Search.svg"
            class="absolute right-[2vw] max-sm:right-[3vw] h-[34%] md:hidden"
            alt="Search"
            id="search-icon"
         />

         <form
            id="mobile-search-form"
            class="md:hidden absolute flex items-center px-[2vw] max-sm:px-[3vw] bg-pale-pink w-full h-full"
            v-if="searchIsOpen"
         >
            <img
               @click="searchIsOpen = false"
               src="~~/assets/svg/Arrow_Up.svg"
               class="h-[35%] cursor-pointer mr-[45px]"
               alt="Back"
            />
            <input
               ref="searchBar"
               type="text"
               v-model="searchText"
               class="w-full h-full bg-transparent focus-visible:outline-0 font-bold text-[14.08pt] text-fandago"
            />
            <img
               @click="
                  searchText === '' ? (searchIsOpen = false) : (searchText = '')
               "
               src="~~/assets/svg/Cancel.svg"
               class="h-[35%] cursor-pointer"
               alt="X"
            />
         </form>
      </div>
      <Transition name="sidebar">
         <AppSidebar v-if="sidebarIsOpen" />
      </Transition>
      <Transition name="overlay">
         <div
            v-if="sidebarIsOpen || searchIsOpen"
            @click="sidebarIsOpen = false"
            class="fixed w-full h-full bg-black opacity-40"
         ></div>
      </Transition>
      <nav
         class="h-[80px] max-sm:h-[55px] w-full text-pale-pink bg-dark-purple [font-weight:700] text-[22px] flex items-center justify-center max-sm:pl-[3vw] max-sm:justify-start max-sm:overflow-x-scroll max-md:text-[18px] max-sm:text-[16px]"
      >
         <NuxtLink v-for="link in navlinks" v-bind="link">
            <div class="list-none mr-distance">
               {{ link.name }}
            </div>
         </NuxtLink>
      </nav>
   </header>
</template>

<script lang="ts" setup>
const searchIsFocused = ref(false);
const searchIsOpen = ref(false);
const searchText = ref("");
const sidebarIsOpen = ref(false);
const searchBar = ref<HTMLInputElement | null>(null);
const navlinks = [
   {
      to: "/",
      name: "Home",
   },
   {
      to: "/collections/new",
      name: "New",
   },
   {
      to: "/category/jackets",
      name: "Jackets",
   },
   {
      to: "/collections/women",
      name: "Women",
   },
   {
      to: "/collections/men",
      name: "Men",
   },
   {
      to: "/collections/children",
      name: "Children",
   },
];

async function triggerSearch() {
   searchIsOpen.value = true;
   sidebarIsOpen.value = false;
}
</script>

<style scoped>
nav .router-link-active > div::after {
   @apply h-[4px] [content:""] block bg-pale-pink rounded-[3px];
}
nav::-webkit-scrollbar {
   display: none;
}
</style>
