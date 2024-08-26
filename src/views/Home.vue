<template>
  <HeaderNav />
  <Hero></Hero>
  <FilterCard></FilterCard>
  <FooterBar></FooterBar>
</template>

<script>
import HeaderNav from "@/components/Header.vue";
import FilterCard from "@/components/FilterCard.vue";
import Hero from "@/components/Hero.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "Home",
  components: {
    HeaderNav,
    FilterCard,
    Hero,
    FooterBar,
  },
};
</script>
