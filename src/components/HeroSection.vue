<template>
  <section
    id="hero"
    class="relative bg-cover bg-center h-screen text-white flex flex-col items-center justify-center"
  >
    <div
      data-aos="fade-in"
      class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center"
    >
      <h1 class="text-4xl md:text-6xl mb-4">Welcome to Iole's Baptism Celebration!</h1>
      <p class="text-xl md:text-2xl">Join us in celebrating this special day.</p>
    </div>
    <div class="absolute inset-0 parallax-bg"></div>
  </section>
</template>

<style scoped>
.parallax-bg {
  background-image: url('@/assets/svg/rainbow.svg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
