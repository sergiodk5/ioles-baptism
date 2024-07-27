<template>
  <section id="gallery" class="bg-pastel py-10 text-center">
    <h2 data-aos="fade-up" class="text-3xl font-serif mb-4">Photo Gallery</h2>
    <div class="photo-grid flex flex-wrap justify-center">
      <img
        src="https://picsum.photos/id/237/200/300"
        alt="1"
        class="w-1/3 p-2"
        data-aos="zoom-in"
        data-aos-delay="100"
      />
      <img
        src="https://picsum.photos/id/238/200/300"
        alt="2"
        class="w-1/3 p-2"
        data-aos="zoom-in"
        data-aos-delay="200"
      />
      <img
        src="https://picsum.photos/id/239/200/300"
        alt="3"
        class="w-1/3 p-2"
        data-aos="zoom-in"
        data-aos-delay="300"
      />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.bg-pastel {
  background-color: #f9f9f9;
}
</style>
