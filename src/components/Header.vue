<template>
  <nav class="max-w-[1360px] mx-auto">
    <div class="px-4 pt-4 pt-0 min-[845px]:pt-9 transition-all">
      <div class="flex justify-between items-center">
        <!-- Logo Section -->
        <div class="flex">
          <div class="logo flex flex-shrink-0 items-center text-white hover:text-[#ff5e14] transition-colors">
            <div class="flex items-center space-x-2">
              <img class="hidden md:block logo-svg transform hover:transition-transform duration-700" style="transform-style: preserve-3d" src="@/assets/images/Logo_aad.png" alt="Al-Aadiyaat" width="52" height="44" />
              <span class="text-white font-semibold hidden md:block text-3xl">AL-'AADIYAAT</span>
            </div>
            <img class="md:hidden" src="@/assets/images/Logo_aad.png" alt="Al-Aadiyaat" width="37" height="31" />
          </div>
        </div>

        <!-- Burger Menu for Mobile -->
        <div class="min-[845px]:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <!-- Burger Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <!-- Navigation Links (Hidden on mobile, shown on desktop) -->
        <div class="hidden min-[845px]:flex sm:space-x-8">
          <router-link
            to="/"
            exact
            :class="{
              'text-[#ff5e14] font-bold  before:w-full before:bg-white': $route.path === '/',
              'text-white hover:text-[#ff5e14] font-bold': $route.path !== '/',
            }"
            class="relative inline-flex items-center before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2"
            aria-current="page"
          >
            Home
          </router-link>

          <router-link
            to="/members"
            :class="{
              'text-[#ff5e14] font-bold  before:w-full before:bg-white': $route.path === '/members',
              'text-white hover:text-[#ff5e14] font-bold': $route.path !== '/members',
            }"
            class="relative inline-flex items-center before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2"
          >
            Members
          </router-link>

          <router-link
            to="/robots"
            :class="{
              'text-[#ff5e14] font-bold  before:w-full before:bg-white': $route.path === '/robots',
              'text-white hover:text-[#ff5e14] font-bold': $route.path !== '/robots',
            }"
            class="relative inline-flex items-center before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2"
          >
            Robots
          </router-link>

          <router-link
            to="/achievement"
            :class="{
              'text-[#ff5e14] font-bold  before:w-full before:bg-white': $route.path === '/achievement',
              'text-white hover:text-[#ff5e14] font-bold': $route.path !== '/achievement',
            }"
            class="relative inline-flex items-center before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2"
          >
            Achievement
          </router-link>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="absolute top-16 right-4 w-40 bg-bodyy bg-opacity-90 text-white flex flex-col items-start space-y-3 py-3 px-3 rounded-md shadow-lg z-50">
          <router-link to="/" @click="toggleMenu" class="text-[#ff5e14] font-semibold text-sm">Home</router-link>
          <router-link to="/members" @click="toggleMenu" class="text-[#ff5e14] font-semibold text-sm">Members</router-link>
          <router-link to="/robots" @click="toggleMenu" class="text-[#ff5e14] font-semibold text-sm">Robots</router-link>
          <router-link to="/achievement" @click="toggleMenu" class="text-[#ff5e14] font-semibold text-sm">Achievement</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
