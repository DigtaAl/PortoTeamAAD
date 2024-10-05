<template>
  <footer class="footer-section">
    <div class="max-w-[1440px] mx-auto">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-6">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text">
                  <h4>Find us</h4>
                  <span>Gedung Aula FT UNY, Sleman Regency</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-6">
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>12345678 0</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>alaadiyaat@.uny.ac.id</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-social-icon mb-6">
                  <span>Follow us</span>
                  <a href="https://github.com/aadhumanoid" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github github-bg"></i>
                  </a>
                  <a href="https://www.instagram.com/al_aadiyaatuny?igsh=MW54eTc0YjZ3dTV2eA==" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-instagram instagram-bg"></i>
                  </a>
                  <a href="https://www.tiktok.com/@alaadiyaat.krsbih?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-tiktok tiktok-bg"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-google-plus-g google-bg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/members">Members</a></li>
                  <li><a href="/robots">Robots</a></li>
                  <li><a href="/achievement">Achievement</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="/">Latest News</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>We grateful for your input</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>Don’t forget to provide feedback to our team by simply filling out the form below.</p>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Message" />
                    <button><i class="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
export default {
  name: "FooterBar",
  components: {},
  mounted() {
    const link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
    // document.head.appendChild(link1);
  },
};
</script>
