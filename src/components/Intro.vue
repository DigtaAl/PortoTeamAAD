<template>
  <!-- <div class="scroll-indicator"></div> -->

  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
    <defs>
      <filter id="distort">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="1" seed="10" result="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="60" xChannelSelector="R" yChannelSelector="G" result="distorted" />
        <feMerge>
          <feMergeNode in="distorted" />
        </feMerge>
      </filter>
    </defs>
  </svg>

  <div class="btn-fullscreen" id="fullscreen-mode">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      focusable="false"
      width="1.4em"
      height="1.4em"
      style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg)"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 17 17"
    >
      <g fill="" fill-rule="evenodd">
        <path d="M3 5h12v8H3z" />
        <path d="M3.918 14.938H1v-2.876h1v1.98h1.918v.896z" />
        <path d="M17 14.938h-2.938v-.896H16v-1.984h1v2.88z" />
        <path d="M17 5.917h-1v-1.95h-1.943v-.946H17v2.896z" />
        <path d="M2 5.938H1V3h2.938v.938H2v2z" />
      </g>
    </svg>
  </div>

  <div class="container">
    <div class="image-wrapper __1">
      <img src="https://uny.ac.id/sites/default/files/styles/large/public/2024-07/WhatsApp%20Image%202024-07-23%20at%2020.43.50.jpeg?itok=PGCoBhjz" alt="Image 1" />
    </div>
    <div class="scroll-content">
      <div class="_number">01</div>
      <h2 class="_title" data-splitting><br /><span>東京</span><br /><sup>TOKYO, Japan.</sup></h2>
      <h5 class="_subtitle" data-splitting><sup>2024</sup></h5>
      <p class="_text" data-splitting>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut velit non magna efficitur elementum.</p>
    </div>
  </div>

  <div class="container">
    <div class="image-wrapper __2">
      <img src="https://uny.ac.id/sites/default/files/2024-08/kumbaraUNY.webp" alt="Image 2" />
    </div>
    <div class="scroll-content">
      <div class="_number">02</div>
      <h2 class="_title" data-splitting><br /><span>東京</span><br /><sup>TOKYO, Japan.</sup></h2>
      <h5 class="_subtitle" data-splitting><sup>2024</sup></h5>
      <p class="_text" data-splitting>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut velit non magna efficitur elementum.</p>
    </div>
  </div>

  <div class="container">
    <div class="image-wrapper __3">
      <img src="https://uny.ac.id/sites/default/files/2024-08/kumbaraUNY.webp" alt="Image 3" />
    </div>
    <div class="scroll-content">
      <div class="_number">03</div>
      <h2 class="_title" data-splitting><br /><span>東京</span><br /><sup>TOKYO, Japan.</sup></h2>
      <h5 class="_subtitle" data-splitting><sup>2024</sup></h5>
      <p class="_text" data-splitting>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut velit non magna efficitur elementum.</p>
    </div>
  </div>

  <div id="logo-codepen">
    <a href="https://codepen.io/vainsan" target="_blank">
      <svg width="240" height="240" xmlns="http://www.w3.org/2000/svg" stroke-linejoin="round" stroke-linecap="round" stroke-width="2.3" stroke="#ffdd40" fill="none" viewbox="0 0 240 240">
        <g>
          <title>codepen.io/vainsan</title>
          <path
            stroke="null"
            id="svg_1"
            d="m2.93024,15.06786l9.25581,6.374l9.25581,-6.374l0,-6.46131l-9.25581,-6.374l-9.25581,6.374l0,6.46131zm18.51163,0l-9.25581,-6.46131l-9.25581,6.46131m0,-6.46131l9.25581,6.374l9.25581,-6.374m-9.25581,-6.374l0,6.374m0,6.46131l0,6.374"
          />
        </g>
      </svg>
    </a>
  </div>
</template>

<script>
import Splitting from "splitting";
import ScrollOut from "scroll-out";

export default {
  name: "Intro",
  mounted() {
    Splitting();
    ScrollOut({
      targets: ["[data-splitting]._title", "[data-splitting]._subtitle", "[data-splitting]._text"],
    });

    window.addEventListener("scroll", this.handleScroll);

    const scrollIndicator = document.querySelector(".scroll-indicator");
    if (scrollIndicator) {
      const containers = document.querySelectorAll(".container");

      containers.forEach(() => {
        const segment = document.createElement("div");
        segment.classList.add("scroll-segment");
        scrollIndicator.appendChild(segment);
      });

      this.updateScrollIndicator();
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const containers = document.querySelectorAll(".container");
      containers.forEach((container) => {
        const rect = container.getBoundingClientRect();
        const scrollPercentage = Math.max(0, Math.min(1, (rect.top + rect.height) / window.innerHeight));
        const turbulenceFrequency = 0.01 + scrollPercentage * 0.05;
        const displacementScale = 10 + scrollPercentage * 5;

        const filter = container.querySelector("svg filter");
        if (filter) {
          const turbulenceElement = filter.querySelector("feTurbulence");
          const displacementElement = filter.querySelector("feDisplacementMap");

          if (turbulenceElement) {
            turbulenceElement.setAttribute("baseFrequency", turbulenceFrequency);
          }

          if (displacementElement) {
            displacementElement.setAttribute("scale", displacementScale);
          }
        }

        const parallaxOffset = scrollPercentage * 50;
        const img = container.querySelector(".image-wrapper img");
        if (img) {
          img.style.transform = `translateY(${parallaxOffset}px)`;
        }
      });

      this.updateScrollIndicator();
    },
    updateScrollIndicator() {
      const scrollIndicator = document.querySelector(".scroll-indicator");
      if (scrollIndicator) {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

        const containers = document.querySelectorAll(".container");
        containers.forEach((container, index) => {
          const segment = scrollIndicator.children[index];
          if (segment) {
            const containerTop = container.offsetTop - 2;
            const containerBottom = containerTop + container.offsetHeight;

            if (scrollTop >= containerTop && scrollTop <= containerBottom) {
              segment.classList.add("active");
            } else {
              segment.classList.remove("active");
            }

            // Update scroll indicator segment height based on scroll percentage
            segment.style.height = `${scrollPercentage}%`;
          }
        });
      }
    },
  },
};
</script>

<style scoped>
:root {
  --c1: #000;
  --c2: #fff;
  --c3: #2bc7b9;
  --c4: #1e1f26;
  --c5: #16171c;
  --c6: #95a5a6;
  --c7: #ff00e1;
  --c8: #e29e29;
  --c9: #2c2d37;
  --char-index: "400s";
  --dim: 30px;
  --border-radius-5: 1.4rem;
}

::-webkit-scrollbar {
  width: 2px;
  background-color: #ffffff;
}
::-webkit-scrollbar-button {
  display: none;
  background-color: rgba(255, 255, 255, 0.2);
}
::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #2bc7b9;
}

.scroll-indicator {
  z-index: 12;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  width: 2px;
  height: 40vh;
  background-color: lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
  overflow: visible;
}

.scroll-segment {
  flex: 1;
  background-color: #ddd;
  transition: all 0.5s ease;
}

.scroll-segment.active {
  transition: all 0.5s ease;
  width: 8px;
  background-color: var(--c3);
}

html {
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
}

body {
  margin: 0;
  overflow-x: hidden;
  color: #000;
  background: #000;
  user-select: none;
  scroll-behavior: smooth;
}

.container {
  scroll-snap-align: start;
  position: relative;
  width: 100vw;
  height: 100vh;
  right: 0;
  left: 0;
  overflow: hidden;
  /*        
          border:solid 1px #2bc7b9;
          */
}

._number {
  font-family: "Satoshi", sans-serif;
  font-size: 15rem;
  opacity: 0.2;
  color: cyan;
  position: absolute;
  /*        
          top:0;
          left:0;
          transform:translate(-50%,-50%);
          */
}

.image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  overflow: hidden;
}

.__1 {
  background-image: url("https://web-ums.s3.ap-southeast-1.amazonaws.com/uploads/sVlgtvu0iKZ2eavSBtZcQoSTYSnrHbAojAbvMtFN.webp");
}
.__2 {
  background-image: url("https://images.unsplash.com/photo-1493514901090-977e25adc0ad?q=50&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}

.__3 {
  background-image: url("https://images.unsplash.com/photo-1493515322954-4fa727e97985?q=50&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}

.image-wrapper img {
  width: 90vw;
  height: auto;
  max-width: 95vw;
  max-height: 60%;
  min-width: 80%;
  max-height: auto;
  /*
          filter: contrast(1.2) saturate(1.3) url(#distort);
          */
  filter: contrast(1.2) saturate(1.3);
  transition: transform 0.5s ease-in-out;
  border-radius: var(--border-radius-5);
  /* Add transition for parallax effect */
}

.scroll-content {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  text-align: center;
  width: 80%;
  color: white;
  border: solid 2px #2bc7b9;
  border-radius: var(--border-radius-5);
  /*
          filter: url(#distort);
          */
}

.scroll-content h2 {
  font-family: "Satoshi", sans-serif;
  font-size: 3rem;
  padding: 1rem;
  margin: 0;
  border-radius: var(--border-radius-5) var(--border-radius-5) 0rem 0rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
}

.scroll-content h5 {
  font-family: "Satoshi", sans-serif;
  font-size: 2rem;
  padding: 1rem;
  margin: 0;
  border-radius: 0rem 0rem 0rem 0rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  border-top: solid 1px #2bc7b9;
  border-bottom: solid 1px #2bc7b9;
}

.scroll-content p {
  /*
          display:none;
          */
  font-family: "Satoshi", sans-serif;
  font-weight: 401;
  font-size: 1.2rem;
  padding: 2rem;
  margin: 0;
  border-radius: 0rem 0rem var(--border-radius-5) var(--border-radius-5);
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
}

/* SVG Filter */
#distort {
  filterunits: objectBoundingBox;
  transition: baseFrequency 0.5s ease-in-out;
  /* Add transition for filter animation */
}

.splitting .char {
  -webkit-transition: all 0.3s linear, -webkit-transform 0.3s cubic-bezier(0.3, 0, 0.3, 1);
  transition: all 0.3s linear, -webkit-transform 0.3s cubic-bezier(0.3, 0, 0.3, 1);
  transition: transform 0.3s cubic-bezier(0.3, 0, 0.3, 1), all 0.3s linear;
  transition: transform 0.3s cubic-bezier(0.3, 0, 0.3, 1), all 0.3s linear, -webkit-transform 0.3s cubic-bezier(0.3, 0, 0.3, 1);
  -webkit-transition-delay: calc(20ms * var(--char-index));
  transition-delay: calc(20ms * var(--char-index));
  text-shadow: 0 0 2rem rgba(255, 255, 255, 0.5);
}
.splitting[data-scroll="out"] .char {
  all: 0.1;
  color: var(--c7);
  opacity: 0;
  -webkit-transform: translateY(0.25em) rotateY(90deg) rotateX(90deg);
  transform: translateY(0.25em) rotateY(90deg) rotateX(90deg);
  -webkit-transition-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.53);
  transition-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.53);
}
._title .char,
._subtitle .char,
._text .char {
  -webkit-transition: color 0.4s linear;
  transition: color 0.4s linear;
  -webkit-transition-delay: calc(0.045s * var(--char-index));
  transition-delay: calc(0.045s * var(--char-index));
}
._title:hover,
._text:hover {
  color: var(--c7);
  text-shadow: 0 0 2rem rgba(255, 255, 255, 1);
}
._subtitle:hover {
  color: var(--c3);
  text-shadow: 0 0 2rem rgba(255, 255, 255, 1);
}

.btn-fullscreen svg path {
  fill: var(--c2);
  fill-opacity: 1;
}
.btn-fullscreen {
  mix-blend-mode: difference;
  top: 40px;
  right: var(--dim);
  position: fixed;
  z-index: 3200;
  transition: all 1s ease-in-out;
}
.infos {
  position: fixed;
  font-family: Arial, sans-serif;
  color: whitesmoke;
  font-size: 14px;
  margin: 1rem;
}
#info_1 {
  top: var(--dim);
  left: var(--dim);
}

#info_3 {
  bottom: var(--dim);
  left: var(--dim);
  & a {
    color: #fff;
    text-decoration: none;
  }
}
#logo-codepen {
  position: fixed;
  bottom: var(--dim);
  width: var(--dim);
  right: var(--dim);
  height: var(--dim);
  & svg path {
    transition: all 2s ease;
    stroke: #fff;
  }
  &:hover svg path {
    stroke: #2bc7b9;
  }
}
sup {
  font-size: 1.1rem;
}
</style>
