<template>
  <div>
    <HeaderNav data-aos="fade-down"></HeaderNav>
    <Hero></Hero>
    <VideoCard data-aos="fade-right"></VideoCard>
    <FilterCard></FilterCard>
    <News></News>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderNav from "@/components/Header.vue";
import FilterCard from "@/components/FilterCard.vue";
import Hero from "@/components/Hero.vue";
import News from "@/components/News.vue";
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
    News,
  },
  mounted() {
    AOS.refresh();
  },
};
</script>
