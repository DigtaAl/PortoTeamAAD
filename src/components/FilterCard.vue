<template>
  <section class="my-20 sm:my-40">
    <section class="hero-section">
      <div class="card-grid">
        <a class="card" href="#">
          <div class="card__background" style="background-image: url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"></div>
          <div class="card__content">
            <p class="card__category">Role</p>
            <h3 class="card__heading">Manager</h3>
          </div>
        </a>
        <a class="card" href="#">
          <div class="card__background" style="background-image: url(https://www.blibli.com/friends-backend/wp-content/uploads/2023/06/B500485-Cover-Cara-Menghitung-Jangka-Sorong.jpg)"></div>
          <div class="card__content">
            <p class="card__category">Role</p>
            <h3 class="card__heading">Mekanik</h3>
          </div>
        </a>
        <a class="card" href="#">
          <div class="card__background" style="background-image: url(https://tokoteknologi.co.id/resources/image/18/ae/1.jpg)"></div>
          <div class="card__content">
            <p class="card__category">Role</p>
            <h3 class="card__heading">Elektronik</h3>
          </div>
        </a>
        <a class="card" href="#">
          <div class="card__background" style="background-image: url(https://toffeedev.com/wp-content/uploads/2023/03/contoh-dan-tugas-programmer.png)"></div>
          <div class="card__content">
            <p class="card__category">Role</p>
            <h3 class="card__heading">Program</h3>
          </div>
        </a>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "FilterCard",
  components: {},
};
</script>

<style scoped>
@import "./../stylefiltercard.css";
</style>
