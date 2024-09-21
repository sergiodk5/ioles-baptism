<template>
  <UnicornParallax>
    <section class="flex flex-col items-center justify-center w-full h-screen">
      <div class="flex items-center justify-center gap-1">
        <img src="@/assets/svg/star.svg" alt="Star" class="w-20 h-20" />
        <img src="@/assets/svg/unicorn.svg" alt="Unicorn" class="w-20 h-20" />
        <img src="@/assets/svg/cloud.svg" alt="Cloud" class="w-20 h-20 text-light-pink" />
      </div>
      <h1 class="text-4xl md:text-6xl text-center text-indigo font-bold z-10">
        {{ t('welcomeSection.welcome') }}
      </h1>
    </section>
  </UnicornParallax>
</template>

<script setup lang="ts">
import UnicornParallax from '@/components/UnicornParallax.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
