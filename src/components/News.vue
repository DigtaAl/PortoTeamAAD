<template>
  <div class="text-center newstext-container">
    <h6 class="newstext">latest news</h6>
  </div>
  <div class="cardsnews mb-6">
    <div class="cardnews content">
      <div class="cardnews-content">
        <div class="cardnews-img">
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Gamer" />
        </div>
        <div class="cardnews-label">E-Sports</div>
        <div class="cardnews-title">Fnatic raises $19 million, shakes up leadership team</div>
      </div>
    </div>
    <div class="cardnews content">
      <div class="cardnews-content">
        <div class="cardnews-img">
          <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="keyboard" />
        </div>
        <div class="cardnews-label">Technology</div>
        <div class="cardnews-title">Google Stadia: The Future of Gaming</div>
      </div>
    </div>
    <div class="cardnews content">
      <div class="cardnews-content">
        <div class="cardnews-img">
          <img src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80" alt="Controller" />
        </div>
        <div class="cardnews-label">Consoles</div>
        <div class="cardnews-title">PS5 won't launch before mid-2020</div>
      </div>
    </div>
    <div class="cardnews form">
      <div class="form-title">Sign Up</div>
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
</style>
