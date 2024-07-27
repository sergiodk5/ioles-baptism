<template>
  <section id="registration" class="bg-white py-10 text-center">
    <h2 data-aos="fade-up" class="text-3xl font-serif mb-4">RSVP</h2>
    <form @submit.prevent="submitForm">
      <label for="name" data-aos="fade-up" data-aos-delay="100" class="block text-xl mb-2"
        >Guest Name (Adult):</label
      >
      <input
        type="text"
        id="name"
        v-model="nameAdult"
        required
        class="w-full mb-4 p-2 border rounded"
        data-aos="fade-up"
        data-aos-delay="200"
      />

      <label for="name_minor" data-aos="fade-up" data-aos-delay="300" class="block text-xl mb-2"
        >Guest Name (Minor):</label
      >
      <input
        type="text"
        id="name_minor"
        v-model="nameMinor"
        class="w-full mb-4 p-2 border rounded"
        data-aos="fade-up"
        data-aos-delay="400"
      />

      <button
        type="submit"
        class="w-full py-2 px-4 bg-gray-800 text-white rounded"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Submit
      </button>
    </form>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const nameAdult = ref<string>('')
const nameMinor = ref<string>('')

const submitForm = (): void => {
  console.log(`Adult: ${nameAdult.value}, Minor: ${nameMinor.value}`)
}
</script>
