<script setup lang="ts"></script>

<template>
   <aside
      id="sidebar"
      class="fixed z-[99] h-full w-[80vw] max-w-[400px] min-w-[200px] md:hidden bg-dark-purple text-white flex flex-col justify-center"
   >
      <NuxtLink class="sidebar-link" to="/user/cart">
         <img
            id="sidebar-cart-logo"
            src="~~/assets/svg/CartWhite.svg"
            alt="Cart"
         />
         <label for="sidebar-cart-logo">Cart</label>
      </NuxtLink>
      <NuxtLink class="sidebar-link" to="/user/wishlist">
         <img
            id="sidebar-wishlist-logo"
            src="~~/assets/svg/WishlistWhite.svg"
            alt="Wishlist"
         />
         <label for="sidebar-wishlist-logo">Wishlist</label>
      </NuxtLink>
      <NuxtLink class="sidebar-link" to="/user/profile">
         <img
            id="sidebar-profile-logo"
            src="~~/assets/svg/ProfileWhite.svg"
            alt="Profile"
         />
         <label for="sidebar-profile-logo">Profile</label>
      </NuxtLink>
   </aside>
</template>

<style scoped>
#sidebar {
   @apply pl-double-distance pb-[80px] text-[17pt] font-oceanwide gap-double-distance;
}
.sidebar-link {
   @apply flex items-center gap-half-distance;
}
.sidebar-link img {
   @apply w-[50px];
}
</style>
