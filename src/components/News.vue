<template>
  <div class="text-center newstext-container">
    <h6 class="newstext">latest news</h6>
  </div>
  <div class="cardsnews mb-6">
    <div class="cardnews content">
      <a href="https://www.uny.ac.id/id/berita/al-aadiyaat-uny-raih-juara-2-kontes-robot-sepak-bola-indonesia-humanoid-tingkat-nasional" class="cardnews-link" target="_blank" rel="noopener noreferrer">
        <div class="cardnews-content">
          <div class="cardnews-img">
            <img src="./../assets/images/News/Berita1.jpg" alt="KRI24" />
          </div>
          <div class="cardnews-label">KRI24</div>
          <div class="cardnews-title hidden md:block">Al-‘Aadiyaat UNY Raih Juara 2 Kontes Robot Sepak Bola Indonesia Humanoid Tingkat Nasional Tahun 2024</div>
        </div>
      </a>
    </div>
    <div class="cardnews content">
      <a href="https://www.beritajogja.com/news/181411068/robot-al-aadiyaat-uny-mulai-mengukir-prestasi-di-kontes-robot-indonesia-nasional-2023" class="cardnews-link" target="_blank" rel="noopener noreferrer">
        <div class="cardnews-content">
          <div class="cardnews-img">
            <img src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/18/2023/06/27/WhatsApp-Image-2023-06-27-at-101306-162902739.jpeg" alt="KRI23" />
          </div>
          <div class="cardnews-label">KRI23</div>
          <div class="cardnews-title hidden md:block">Berita Jogja: Robot Al-‘Aadiyaat UNY Mulai Mengukir Prestasi Di Kontes Robot Indonesia Nasional 2023</div>
        </div>
      </a>
    </div>
    <div class="cardnews content">
      <a href="https://jateng.antaranews.com/berita/232407/uny-raih-juara-umum-kri-2019-regional-iii" class="cardnews-link" target="_blank" rel="noopener noreferrer">
        <div class="cardnews-content">
          <div class="cardnews-img">
            <img src="https://img.antaranews.com/cache/1200x800/2019/04/27/juara-umum.jpg.webp" alt="KRI19" />
          </div>
          <div class="cardnews-label">KRI19</div>
          <div class="cardnews-title hidden md:block">Antara Jateng: UNY raih juara umum KRI 2019 Regional III</div>
        </div>
      </a>
    </div>
    <div class="cardnews content">
      <a href="https://www.uny.ac.id/id/berita/kemenangan-gemilang-uny-robotics-team-di-kontes-robot-indonesia-2024" class="cardnews-link" target="_blank" rel="noopener noreferrer">
        <div class="cardnews-content">
          <div class="cardnews-img">
            <img src="https://www.uny.ac.id/sites/default/files/styles/large/public/2024-07/WhatsApp%20Image%202024-07-23%20at%2020.43.50.jpeg?itok=PGCoBhjz" alt="Robotika" />
          </div>
          <div class="cardnews-label">Robotika UNY</div>
          <div class="cardnews-title hidden md:block">Kemenangan Gemilang UNY Robotics Team di Kontes Robot Indonesia 2024</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  components: {},
};
</script>

<style scoped>
.cardsnews {
  width: calc(100% - 2em);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1em;
  grid-template-areas: "a a b c" "a a d d";
  width: 80%;
  margin: 0 auto; /* Pastikan grid berada di tengah secara horizontal */
}

.cardnews {
  width: 100%;
  position: relative;
  transition: all 0.25s ease;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}
.cardnews:last-child {
  margin-bottom: 0;
}
.cardnews:before {
  height: 0;
  content: "";
  display: block;
  padding-bottom: 47.36%;
}
.cardnews.content:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  content: "";
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), black);
}
.cardnews:nth-child(1) {
  grid-area: a;
}
.cardnews:nth-child(2) {
  grid-area: b;
}
.cardnews:nth-child(3) {
  grid-area: c;
}
.cardnews:nth-child(4) {
  grid-area: d;
}
.cardnews-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.cardnews-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.cardnews-img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.cardnews-label {
  position: absolute;
  top: 0.45rem;
  left: 0.45rem;
  background: #089f8a;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.7em;
  color: white;
  padding: 0.5em;
}
.cardnews-title {
  position: absolute;
  left: 1em;
  bottom: 1em;
  color: #d6dbeb;
  z-index: 5;
  font-size: 0.8em;
}
.cardnews.form {
  position: relative;
}
.cardnews.form:before {
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
}
.cardnews.form:after {
  position: absolute;
  top: 0.5em;
  left: 0.5em;
  width: calc(100% - 1em);
  height: calc(100% - 1em);
  content: "";
  background: #252833;
}
.cardnews.form .form-title {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 7vw;
  font-weight: 900;
  z-index: 5;
  text-transform: uppercase;
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
.cardnews.form .form-title:before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  content: "Sign Up";
  opacity: 0.5;
  filter: blur(10px);
  transition: all 0.25s ease;
  z-index: 2;
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  transform: translateX(-50%) translateY(-50%);
}
.cardnews:nth-child(2) .cardnews-label {
  background: #ef4e7b;
}
.cardnews:nth-child(3) .cardnews-label {
  background: #1098ad;
}
.cardnews:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.35);
}
.cardnews:hover .form-title:before {
  filter: blur(3px);
  opacity: 0.7;
}
.cardnews-link {
  display: block; /* Pastikan link mengambil seluruh area */
  width: 100%;
  height: 100%;
  text-decoration: none; /* Hapus underline pada link */
  color: inherit; /* Warna teks mengikuti warna teks default */
}
</style>
