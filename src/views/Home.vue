<template>
  <div>
    <HeaderNav data-aos="fade-down"></HeaderNav>
    <Hero></Hero>
    <VideoCard data-aos="fade-right"></VideoCard>
    <FilterCard data-aos="fade-left"></FilterCard>
    <FooterBar data-aos="fade-right"></FooterBar>
  </div>
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
