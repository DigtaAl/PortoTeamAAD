<template>
  <div class="container">
    <div class="timeline">
      <ul>
        <li>
          <div class="timeline-content">
            <h3 class="date">1 - 6th July, 2024</h3>
            <h1>KRI 2024 (Nasional)</h1>
            <p>
              Acara ini diadakan secara offline di Universitas Muhammadiyah Surakarta, dan tim berhasil meraih juara 2 tingkat nasional dalam kompetisi tersebut.
              <!-- <router-link :to="{ name: 'History', params: { year: '2024' } }">di sini</router-link>. -->
            </p>
            <img src="./../assets/images/AAD.jpg" alt="KRI 2024 (Nasional)" />
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h3 class="date">28th may - 1st June, 2024</h3>
            <h1>KRI 2024 ( Regional )</h1>
            <p>Acara ini diadakan secara online di Universitas Muhammadiyah Surakarta, dan tim berhasil meraih juara 1 tingkat regional I dalam kompetisi tersebut.</p>
            <img src="./../assets/images/AAD.jpg" alt="KRI 2024 (Regional)" />
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h3 class="date">22 - 25th june, 2023</h3>
            <h1>KRI 2023 ( Nasional )</h1>
            <p>Acara ini diadakan secara offline di Universitas Semarang, dan tim berhasil meraih juara 3 tingkat nasional dalam kompetisi tersebut.</p>
            <img src="./../assets/images/AAD.jpg" alt="KRI 2023 (Nasional)" />
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h3 class="date">28 - 31 may, 2023</h3>
            <h1>KRI 2023 ( Regional )</h1>
            <p>Acara ini diadakan secara online di Universitas Semarang, dan tim berhasil meraih juara 1 tingkat regional I dalam kompetisi tersebut.</p>
            <img src="./../assets/images/AAD.jpg" alt="KRI 2023 (Regional)" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  font-family: "Montserrat";
  background-color: #131313;
}
.timeline {
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline ul {
  list-style: none;
}
.timeline ul li {
  padding: 20px;
  background-color: #1e1f22;
  color: white;
  border-radius: 10px;
  margin-bottom: 20px;
}
.timeline ul li:last-child {
  margin-bottom: 0;
}
.timeline-content h1 {
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 10px;
}
.timeline-content p {
  font-size: 16px;
  line-height: 30px;
  font-weight: 300;
}
.timeline-content .date {
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
.timeline-content img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
  object-fit: cover;
}
@media only screen and (min-width: 768px) {
  .timeline:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: gray;
  }
  .timeline ul li {
    width: 50%;
    position: relative;
    margin-bottom: 50px;
  }
  .timeline ul li:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-30px);
    border-radius: 20px 0px 20px 20px;
  }
  .timeline ul li:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(30px);
    border-radius: 0px 20px 20px 20px;
  }
  .timeline ul li::before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: gray;
    top: 0px;
  }
  .timeline ul li:nth-child(odd)::before {
    transform: translate(50%, -50%);
    right: -30px;
  }
  .timeline ul li:nth-child(even)::before {
    transform: translate(-50%, -50%);
    left: -30px;
  }
  .timeline-content .date {
    position: absolute;
    top: -30px;
  }
  .timeline ul li:hover::before {
    background-color: aqua;
  }
}
</style>
