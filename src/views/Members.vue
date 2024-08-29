<template>
  <HeaderNav />
  <TeamNow></TeamNow>
</template>

<script>
import HeaderNav from "@/components/Header.vue";
import TeamNow from "@/components/TeamNow.vue";

export default {
  name: "Members",
  components: {
    HeaderNav,
    TeamNow,
  },
};
</script>
