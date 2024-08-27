<template>
  <HeaderNav />
  <Hero></Hero>
  <VideoCard></VideoCard>
  <FilterCard></FilterCard>
  <FooterBar></FooterBar>
</template>

<script>
import HeaderNav from "@/components/Header.vue";
import FilterCard from "@/components/FilterCard.vue";
import Hero from "@/components/Hero.vue";
import FooterBar from "@/components/FooterBar.vue";
import VideoCard from "@/components/Video.vue";

export default {
  name: "Home",
  components: {
    HeaderNav,
    FilterCard,
    Hero,
    FooterBar,
    VideoCard,
  },
};
</script>
