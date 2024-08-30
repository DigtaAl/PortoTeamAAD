<template>
  <HeaderNav />
  <RobotList />
</template>

<script>
import HeaderNav from "@/components/Header.vue";
import RobotList from "@/components/RobotList.vue";

export default {
  name: "Robots",
  components: {
    HeaderNav,
    RobotList,
  },
};
</script>
