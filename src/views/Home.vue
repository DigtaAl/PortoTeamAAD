<template>
  <div>
    <HeaderNav data-aos="fade-down"></HeaderNav>
    <Hero></Hero>
    <VideoCard data-aos="fade-right"></VideoCard>
    <FilterCard></FilterCard>
    <News></News>
    <div style="display: flex; justify-content: center; margin-top: 40px">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.07302915903173!2d110.38721573536087!3d-7.771953643055321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b6c270ec03%3A0x78c699bae0c45583!2sRobotika%20UNY!5e0!3m2!1sid!2sid!4v1726587997438!5m2!1sid!2sid"
        width="85%"
        height="450"
        style="border: 1px solid #000"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
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
