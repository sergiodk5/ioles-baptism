<template>
  <section id="gallery" class="bg-white py-10 px-4 text-center">
    <h2 data-aos="fade-up" class="mb-4 text-4xl font-bold text-center text-card-pink">
      Photo Gallery
    </h2>
    <div class="columns-2 md:columns-4 xl:md:columns-6 gap-4 space-y-4">
      <img
        v-for="i in 29"
        :key="i"
        :src="`/images/${i}-min.webp`"
        :alt="`${i}`"
        data-aos="fade-up"
        data-aos-delay="100"
        class="h-auto max-w-full rounded-lg shadow-lg"
      />
    </div>
  </section>
</template>

<script lang="ts" setup></script>
