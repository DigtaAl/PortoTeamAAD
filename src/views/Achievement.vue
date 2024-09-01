<template>
  <HeaderNav />
  <Timeline />
  <footer class="footer-section">
    <div class="copyright-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 text-center text-lg-left">
            <div class="copyright-text">
              <p>Copyright &copy; 2024, Made with 🤍 by <a href="https://github.com/DigtaAl">Rifky Andigta Al-Fathir</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import HeaderNav from "@/components/Header.vue";
import Timeline from "@/components/Timeline.vue";

export default {
  name: "Achievement",
  components: {
    HeaderNav,
    Timeline,
  },
};
</script>
