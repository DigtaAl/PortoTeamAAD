<template>
  <section>
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center pb-3 mt-6">
        <span>introducing our</span>
        <h2>Cherished</h2>
        <span class="bg-watermark2">Robot</span>
      </div>
    </div>
    <div class="containerrobot">
      <div class="cardrobot">
        <div class="Box">
          <img src="./../assets/images/Robot/Robot1.png" />
        </div>
        <div class="details">
          <strong style="font-weight: bold">Robot 1 (Mono)</strong>
          <p class="mb-6">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <strong class="mt-6" style="font-weight: bold">Specification</strong>
          <p>Weight : 4,4 kg</p>
          <p>Height : 57 cm</p>
        </div>
      </div>
      <div class="cardrobot">
        <div class="Box">
          <img src="./../assets/images/RobotAssembly.jpg" />
        </div>
        <div class="details">
          <strong style="font-weight: bold">Robot 2 (Ujang)</strong>
          <p class="mb-6">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <strong class="mt-6" style="font-weight: bold">Specification</strong>
          <p>Weight : 4,85 kg</p>
          <p>Height : 61,5 cm</p>
        </div>
      </div>
      <div class="cardrobot">
        <div class="Box">
          <img src="./../assets/images/Robot/Robot3.png" />
        </div>
        <div class="details">
          <strong style="font-weight: bold">Robot 3 (Pono)</strong>
          <p class="mb-6">
            Pono, a humanoid robot by the Al-‘Aadiyaat team at Universitas Negeri Yogyakarta (UNY), showcases advanced robotics engineering. Built to mimic human movements with high efficiency, it’s designed for various applications.
          </p>
          <strong class="mt-6" style="font-weight: bold">Specification</strong>
          <p>Weight : 4 kg</p>
          <p>Height : 61.5 cm</p>
        </div>
      </div>
      <div class="cardrobot">
        <div class="Box">
          <img src="./../assets/images/Robot/Robot4.png" />
        </div>
        <div class="details">
          <strong style="font-weight: bold">Robot 4 (Arno)</strong>
          <p class="mb-6">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <strong class="mt-6" style="font-weight: bold">Specification</strong>
          <p>Weight : 3,5 kg</p>
          <p>Height : 56 cm</p>
        </div>
      </div>
      <div class="cardrobot">
        <div class="Box">
          <img src="./../assets/images/RobotAssembly.jpg" />
        </div>
        <div class="details">
          <strong style="font-weight: bold">Robot 5 (BayMax)</strong>
          <p class="mb-6">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <strong class="mt-6" style="font-weight: bold">Specification</strong>
          <p>Weight : 3,2 kg</p>
          <p>Height : 63,5 cm</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RobotList",
  components: {},
};
</script>

<style scoped>
.containerrobot {
  max-width: 1000px;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.cardrobot {
  position: relative;
  margin: 20px 0;
  width: 300px;
  height: 400px;
  background: #fff;
  transform-style: preserve-3d;
  transform: perspective(2000px);
  box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.5), 0 20px 20px rgba(0, 0, 0, 0.5);
  transition: 1s;
}
.cardrobot:hover {
  z-index: 10000;
  transform: perspective(2000px) rotate(-10deg);
  box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.5), 0 10px 100px rgba(0, 0, 0, 0.5);
}

.cardrobot .Box {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  box-sizing: border-box;
  position: relative;
  transform-origin: left;
  z-index: 1;
  transition: 1s cubic-bezier(0.15, 1.7, 0.84, 0.58);
  background: #111;
}
.cardrobot .Box img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cardrobot:hover .Box {
  transform: rotateY(-135deg);
}
.cardrobot .details {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 20px;
  z-index: -1;
  font-family: Verdana;
}

section {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-align: center;
  width: calc(min(90rem, 90%));
  margin-inline: auto;
}

section span {
  text-transform: uppercase;
  display: block;
  font-size: 1.2rem;
  color: #a3a3a3;
}
section h2 {
  font-size: clamp(3.5rem, 3rem + 1.6vw, 5rem);
  margin-top: -0.725rem;
  color: #fff;
  font-weight: bold;
}
section .bg-watermark2 {
  color: #1f1f1f;
  font-size: clamp(6rem, 1.3333rem + 10.9333vw, 20rem);
  font-weight: 800;
  position: absolute;
  z-index: -1;
  left: 50%;
  transform: translatex(-50%) translatey(-15%);
  user-select: none;
  letter-spacing: 0.5rem;
  margin-top: -5.5rem;
}
</style>
