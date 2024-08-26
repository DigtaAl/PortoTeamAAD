<template>
  <div class="min-h-svh max-w-[1440px] mx-auto">
    <HeaderNav />
    <Hero></Hero>
    <FilterCard></FilterCard>
  </div>
</template>

<script>
import HeaderNav from "@/components/Header.vue";
import FilterCard from "@/components/FilterCard.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "Home",
  components: {
    HeaderNav,
    FilterCard,
    Hero,
  },
};
</script>
