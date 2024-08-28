<template>
  <div class="not-found-container mt-12 mb-12">
    <div class="shelf">
      <a class="book home-page">Home page</a>
      <a class="book about-us">About us</a>
      <a class="book contact">Contact</a>
      <a class="book faq">F.A.Q.</a>

      <span class="book not-found"></span>

      <span class="door left"></span>
      <span class="door right"></span>
    </div>
  </div>
  <h1 class="text-error colorred-text-error">Error 404</h1>
  <p class="text-error colorwhite-text-error">The page you're looking for can't be found</p>
</template>

<script>
export default {
  name: "NotFound",
  components: {},
};
</script>
