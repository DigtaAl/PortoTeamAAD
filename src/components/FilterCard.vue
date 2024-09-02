<template>
  <section class="hero-section">
    <div class="card-grid">
      <!-- Looping untuk setiap card -->
      <a v-for="card in cards" :key="card.id" class="card" href="#" @click.prevent="showPopup(card)">
        <div class="card__background" :style="{ backgroundImage: 'url(' + card.image + ')' }"></div>
        <div class="card__content">
          <p class="card__category">Role</p>
          <h3 class="card__heading">{{ card.title }}</h3>
        </div>
      </a>
    </div>

    <!-- Popup overlay -->
    <div v-if="isPopupVisible" class="popup-overlay">
      <div class="popup-content">
        <!-- Tombol Close X -->
        <button class="close-btn" @click="closePopup">✕</button>

        <!-- Isi Popup -->
        <h2 class="popup-title">{{ selectedCard.title }}</h2>
        <p class="popup-description">{{ selectedCard.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FilterCard",
  data() {
    return {
      // Data cards
      cards: [
        {
          id: 1,
          title: "Manager",
          description: "A Manager oversees the work of team members and coordinates efforts to meet company goals.",
          image: "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
          id: 2,
          title: "Mekanik",
          description: "A Mekanik works on machines, repairing and maintaining them to ensure optimal performance.",
          image: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/06/B500485-Cover-Cara-Menghitung-Jangka-Sorong.jpg",
        },
        {
          id: 3,
          title: "Elektronik",
          description: "An Elektronik engineer designs and develops electronic systems for various applications.",
          image: "https://tokoteknologi.co.id/resources/image/18/ae/1.jpg",
        },
        {
          id: 4,
          title: "Program",
          description: "A Programmer writes and tests code that allows computer applications to function properly.",
          image: "https://toffeedev.com/wp-content/uploads/2023/03/contoh-dan-tugas-programmer.png",
        },
      ],
      isPopupVisible: false, // Mengontrol tampilan popup
      selectedCard: null, // Menyimpan card yang dipilih
    };
  },
  methods: {
    // Menampilkan popup dan menyimpan data card yang dipilih
    showPopup(card) {
      this.selectedCard = card;
      this.isPopupVisible = true;
    },
    // Menutup popup
    closePopup() {
      this.isPopupVisible = false;
    },
  },
};
</script>

<style scoped>
/* Styling untuk popup overlay */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup-content {
  background: white;
  padding: 30px;
  border-radius: 16px;
  width: 350px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
}

.popup-title {
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: bold;
  color: #333;
}

.popup-description {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
}

/* Tombol close (X) */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.close-btn:hover {
  transform: rotate(360deg);
  background-color: #d11a2a;
}

/* Typography */
body {
  font-family: "Roboto", sans-serif;
  background-color: #f4f4f9;
}
</style>
