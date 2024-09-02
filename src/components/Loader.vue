<template>
  <section class="sectionloader" v-if="isVisible">
    <div class="loader">
      <span>A</span>
      <span>L</span>
      <span>-</span>
      <span>A</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>Y</span>
      <span>A</span>
      <span>T</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Loader",
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    show() {
      this.isVisible = true;
    },
    hide() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
.sectionloader {
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  overflow: hidden;
}
.loader {
  color: dodgerblue;
  font-size: 2em;
  font-family: sans-serif;
  text-transform: uppercase;
  width: 40em;
  height: 3em;
  animation: change-color 10s linear infinite;
}

.loader span {
  animation: moving 2s linear infinite;
  animation-delay: calc((var(--n) - 10) * 0.2s);
  position: absolute;
  height: 3em;
}

@keyframes change-color {
  to {
    filter: hue-rotate(1turn);
  }
}

@keyframes moving {
  0% {
    filter: opacity(0);
    transform: rotate(-180deg);
    left: 100%;
  }

  33% {
    filter: opacity(1);
    transform: rotate(0deg);
    left: 60%;
  }

  66% {
    filter: opacity(1);
    transform: rotate(0deg);
    left: 40%;
  }

  100% {
    filter: opacity(0);
    transform: rotate(180deg);
    left: 0;
  }
}

.loader span:nth-child(1) {
  --n: 1;
}

.loader span:nth-child(2) {
  --n: 2;
}

.loader span:nth-child(3) {
  --n: 3;
}

.loader span:nth-child(4) {
  --n: 4;
}

.loader span:nth-child(5) {
  --n: 5;
}

.loader span:nth-child(6) {
  --n: 6;
}

.loader span:nth-child(7) {
  --n: 7;
}

.loader span:nth-child(8) {
  --n: 8;
}

.loader span:nth-child(9) {
  --n: 9;
}
.loader span:nth-child(10) {
  --n: 10;
}
</style>
