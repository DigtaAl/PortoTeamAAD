<template>
  <nav class="max-w-[1240px] mx-auto">
    <div class="px-4 pt-4 pt-0 min-[845px]:pt-9 transition-all">
      <div class="flex justify-between">
        <div class="flex">
          <div class="logo flex flex-shrink-0 items-center text-white hover:text-[#ff5e14] transition-colors">
            <div class="flex items-center space-x-2">
              <img class="hidden md:block logo-svg transform hover:transition-transform duration-700" style="transform-style: preserve-3d" src="@/assets/images/Logo_aad.png" alt="Al-Aadiyaat" width="52" height="44" />
              <span class="text-white font-semibold hidden md:block text-3xl">AL-'AADIYAAT</span>
            </div>
            <img class="md:hidden" src="@/assets/images/Logo_aad.png" alt="Al-Aadiyaat" width="37" height="31" />
          </div>
        </div>
        <div class="hidden min-[845px]:flex sm:space-x-8">
          <router-link
            to="/"
            exact
            :class="{
              'text-[#ff5e14] font-bold before:h-[1.5px] before:w-full before:bg-white': $route.path === '/',
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
              'text-[#ff5e14] font-bold before:h-[1.5px] before:w-full before:bg-white': $route.path === '/members',
              'text-white hover:text-[#ff5e14] font-bold': $route.path !== '/members',
            }"
            class="relative inline-flex items-center before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2 before:h-[1.5px] before:w-0 before:bg-white before:transition-all before:hover:w-full before:duration-500"
          >
            Members
          </router-link>

          <router-link
            to="/robots"
            :class="{
              'text-[#ff5e14] font-bold before:h-[1.5px] before:w-full before:bg-white': $route.path === '/robots',
              'text-white hover:text-[#ff5e14] font-bold': $route.path !== '/robots',
            }"
            class="relative inline-flex items-center before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2 before:h-[1.5px] before:w-0 before:bg-white before:transition-all before:hover:w-full before:duration-500"
          >
            Robots
          </router-link>

          <router-link
            to="/achievement"
            :class="{
              'text-[#ff5e14] font-bold before:h-[1.5px] before:w-full before:bg-white': $route.path === '/achievement',
              'text-white hover:text-[#ff5e14] font-bold': $route.path !== '/achievement',
            }"
            class="relative inline-flex items-center before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2 before:h-[1.5px] before:w-0 before:bg-white before:transition-all before:hover:w-full before:duration-500"
          >
            Achievement
          </router-link>
          <router-link
            to="/news"
            :class="{
              'text-[#ff5e14] font-bold before:h-[1.5px] before:w-full before:bg-white': $route.path === '/news',
              'text-white hover:text-[#ff5e14] font-bold': $route.path !== '/news',
            }"
            class="relative inline-flex items-center before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2 before:h-[1.5px] before:w-0 before:bg-white before:transition-all before:hover:w-full before:duration-500"
          >
            News
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>
